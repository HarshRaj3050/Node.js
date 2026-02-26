const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect("mongodb+srv://admin:fsQ8poYjdSCQFDKQ@backend.gfdqfyk.mongodb.net/student");

    console.log("database connected...");
}

module.exports = connectDB;