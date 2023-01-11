const Task = require('../models/Task');
const express = require('express');
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
    res.send(error);
    }
})