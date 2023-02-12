"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// app = Route
const app = (0, express_1.Router)();
app.get('/s', (req, res) => {
    res.send('Hello, Users!');
});
exports.default = app;
