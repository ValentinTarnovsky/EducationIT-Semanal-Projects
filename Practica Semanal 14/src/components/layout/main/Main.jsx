import { useContext, useState, useEffect, useRef } from "react";
import NotesContext from "../../contexts/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

import "./main.scss";

const Main = () => {
    const { notas, setNotas, iden, setIden, showNote, setShowNote, editando, setEditando } = useContext(NotesContext);
    const [ titulo, setTitulo ] = useState("");
    const [ contenido, setcontenido ] = useState("");
    const val = useRef();

    useEffect(() => {
        setTitulo(showNote.titulo);
        setcontenido(showNote.contenido);
    }, [showNote]);

    const handleOnChangeTitle =(e) => {
        val.current = e.target.value;
        setShowNote({
            titulo: val.current,
            contenido: showNote.contenido,
            id: showNote.id,
            fav: showNote.fav,
        });
        const index = notas.findIndex((nota) => nota.id === showNote.id);
        const cloneNotas = [...notas];
        cloneNotas[index].titulo = val.current;
        setNotas(cloneNotas);
    };

    const handleOnChangeNote =(e) => {
        val.current = e.target.value;
        setShowNote({
            titulo: showNote.titulo,
            contenido: val.current,
            id: showNote.id,
            fav: showNote.fav,
        });
        const index = notas.findIndex((nota) => nota.id === showNote.id);
        const cloneNotas = [...notas];
        cloneNotas[index].contenido = val.current;
        setNotas(cloneNotas);
    };

    const handleOnSubmitEdit = (e) => {
        e.preventDefault();
        setEditando(false);
    };

    return (
        <main className="main">
            {editando ? (
                <>
                    <form onSubmit={handleOnSubmitEdit} className="main__form">
                        <input
                            placeholder="Escriba su titulo aqui..."
                            className="main__form__input"
                            type="text"
                            value={showNote.titulo}
                            onChange={handleOnChangeTitle}
                        />
                        <textarea
                            placeholder="Escriba su nota aqui..."
                            className="main__form__textarea"
                            value={showNote.contenido}
                            onChange={handleOnChangeNote}
                        ></textarea>
                        <button className="main__form__btn" type="submit"><FontAwesomeIcon icon={faCheckDouble} /></button>
                    </form>
                </>
            ) : (
                <div className="main__container">
                    <h3 className="main__container__title">{titulo}</h3>
                    <p className="main__container__content">{contenido}</p>
                </div>
            )}
        </main>
    );
};

export default Main;