const mongoose = require('mongoose');
const config = require('config');
require('dotenv').config();
const db = process.env.MONGOURI;

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://rudrakshh:rudrakshh@connectech.xbuhnmu.mongodb.net/?retryWrites=true&w=majority");

        console.log('MongoDB Connected...');
    } catch (err) {
        console.log(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;