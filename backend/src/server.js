const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Mongoose Task Model
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

const Task = mongoose.model('Task', taskSchema);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


mongoose.connect('mongodb://localhost:27017');

app.post('/tasks', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTask = new Task({ title, description });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
