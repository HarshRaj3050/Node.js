const mongoose = require('mongoose');

async function connectDB() {
    try{
        await mongoose.connect(process.env.mongoose_URI);
        console.log("DataBase connected successfully")
    } catch(err){
        console.log("DataBase connection error: ", err);
    }
}

module.exports = connectDB;