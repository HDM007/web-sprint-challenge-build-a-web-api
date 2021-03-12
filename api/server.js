const express = require('express');
const actionsRouter = require("./actions/actions-router");
const projectsRouter = require("./projects/projects-router");

//create an express app instance as the server
const server = express();

// Complete your server here!
// Do NOT `server.listen()` inside this file!
server.use(express.json())
// parses as json and only looks at requests with correct Content-Type header

server.use("/api/actions", actionsRouter);
server.use("api/projects", projectsRouter);

module.exports = server;
