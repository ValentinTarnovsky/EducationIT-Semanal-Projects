const Router = require("express");
const { getTasks, createTask } = require("../controllers/tasks.controller.js");

const routes = Router();

routes
    .get("/", (req, res) => {
        getTasks(req, res);
    })
    .post("/", (req, res) => {
        createTask(req, res);
    });

module.exports = routes;