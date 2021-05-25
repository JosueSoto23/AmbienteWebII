const express = require('express');
const app = express();

// database connection
const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://127.0.0.1:27017/todo-api");
// parser for the request body (required for the POST and PUT methods)
const bodyParser = require("body-parser");
const Task = require("./models/taskModel");

app.use(bodyParser.json());

const {
  taskPatch,
  taskPost,
  taskGet,
} = require("./controllers/taskController.js");

// check for cors
const cors = require("cors");
app.use(cors({
  domains: '*',
  methods: "*"
}));

// listen to the task request
app.get("/api/tasks", taskGet);
app.post("/api/tasks", taskPost);
app.patch("/api/tasks", taskPatch);
app.put("/api/tasks", taskPatch);

app.listen(3000, () => console.log(`Example app listening on port 3000!`))