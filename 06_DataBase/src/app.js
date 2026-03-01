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


app.get('/notes', async (req, res) => {
    const note = await noteModel.find({       // return data in the Array format []
        // age: 20
    }); 

    // find => [{},{}] or []
    // findOne => {} or null

    res.status(200).json({
        message: "Notes feach successfully!",
        notes: note
    })
})


app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: "Note delete successfully"
    })
})


app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const newAge = req.body.age

    await noteModel.findOneAndUpdate({_id: id}, {age: newAge})

    res.status(200).json({
        message: "new Age updated successfully"
    })
})


module.exports = app;