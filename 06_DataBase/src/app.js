const express = require('express');
const noteModel = require('./models/note.model');

const app = express();
app.use(express.json());

app.post('/notes', async (req, res) => {
    const data = req.body;
    await noteModel.create({
        name: data.name,
        age: data.age
    })

    res.status(201).json({
        message: "node created successfully"
    })
})



module.exports = app;