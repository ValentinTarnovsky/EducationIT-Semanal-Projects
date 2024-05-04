const { MongoClient } = require("mongodb");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../env") });

const client = new MongoClient(process.env.DATABASE_URL);

const connect = async () => {
    console.log("Conectando...");

    try {
        await client.connect();
        console.log("CONECTADO");
    } catch (error) {
        console.log(error.message);
    }
};

const desconnect = async () => {
    try {
        await client.close();
        console.log("DESCONECTADO");
    } catch (error) {
        console.log(error.message);
    }
};

const getCollection = async (nameCollection) => {
    await connect();

    return client.db(process.env.DATABASE_NAME).collection(nameCollection);
};

const generateId = async (collection) => {
    const documentMaxId = await collection.find().sort({ id: -1 }).limit(1).toArray();
    const maxId = documentMaxId[0]?.id ?? 0;

    return maxId + 1;
};

module.exports = { desconnect, getCollection, generateId };