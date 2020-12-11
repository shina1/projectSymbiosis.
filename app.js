const express = require("express");
const socket = require("socket.io");
const mongo = require("mongodb");
const fs = require("fs");
const morgan = require("morgan");

const app = express();
// middlewares
app.use(express.json());

// route handlers

// server
module.exports = app;
