const { desconnect, getCollection, generateId } = require("../connection_db.js");
const { HEADER_CONTENT_TYPE } = require("../constants/headers.js");

const {
    ERROR_DATA_MISSING,
    ERROR_SERVER,
} = require("../constants/messages.js");

const createSchema = (body) => {
    const { title, description } = body;

    return {
        title,
        description,
    };
};

// Controller para obtener tasks
const getTasks = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const collection = await getCollection("tasks");
        const tasks = await collection.find().toArray();

        res.status(200).send(tasks);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: ERROR_SERVER });
    } finally {
        await desconnect();
    }
};

// Controller para crear una task
const createTask = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { title, description } = req.body;

        if (!title || !description ) return res.status(400).send({ message: ERROR_DATA_MISSING });

        const collection = await getCollection("tasks");
        const id = await generateId(collection);
        const task = { id, ...createSchema(req.body) };
        await collection.insertOne(task);

        res.status(201).send(task);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: ERROR_SERVER });
    } finally {
        await desconnect();
    }
};

module.exports = { getTasks, createTask };