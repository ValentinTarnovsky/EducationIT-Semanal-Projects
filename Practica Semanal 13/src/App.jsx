import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import "./app.scss";

const App = () => {
    const taskRef = useRef();
    const [tasks, setTasks] = useState([]);
    const [taskN, setTaskN] = useState(0);

    const createTask = function (id, text) {
        this.id = id;
        this.text = text;
    };

    const handleOnChangeValue = (val) => {
        taskRef.current = val.trim();
    };

    const handleOnClickSubmit = (e) => {
        e.preventDefault();
        if (taskRef.current && taskRef.current.length >= 20) {
            const newTasks = [...tasks, new createTask(taskN, taskRef.current)];
            setTasks(newTasks);
            setTaskN(taskN + 1);
            taskRef.current = "";
        } else {
            const err = document.getElementById("err");
            err.innerText = "Error: To add a task it must be at least 20 characters.";
            console.log("err");
        }
    };

    const handleOnChangeDelete = (index) => {
        const updatedTaskList = tasks.toSpliced(index, 1);
        setTasks(updatedTaskList);
    };

    const TaskForm = () => {
        return (
            <div className="bg-dark p-3 pb-1">
                <h2 className="text-light">Task Form</h2>
                <form>
                    <div className="d-flex">
                        <input className="form-control me-2" type="text" name="task-form" id="task-form" placeholder="Add task" minLength={40} onChange={(e) => handleOnChangeValue(e.target.value)}/>
                        <button className="btn btn-light" onClick={handleOnClickSubmit}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <br />
                    <span className="text-danger" id="err"></span>
                </form>
            </div>
        );
    };

    const TaskList = () => {
        return (
            <div className="bg-dark p-3 pt-0 mt-3">
                <div className="d-flex justify-content-between">
                    <h2 className="text-light">Task List</h2>
                    <h3 className="text-light">Total Tasks: {tasks.length}</h3>
                </div>
                <ul className="list-group">
                    {tasks.map((task, index) => (
                        <li className="list-group-item bg-dark text-light d-flex justify-content-between align-items-center" key={index}>
                            <div className="d-flex flex-column">
                                <span className="fw-bold">ID: {task.id}</span>
                                <span>{task.text}</span>
                            </div>
                            <button className="btn btn-danger" onClick={() => handleOnChangeDelete(index)}><FontAwesomeIcon icon={faTrash} /></button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="container">
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default App;