const mongoose = require('mongoose');
const config = require('config');
// const db = config.get("mongoURI");
const db = require('./keys');

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        // console.log(db);
        await mongoose.connect(db.mongoURI);

        console.log('MongoDB Connected...');
    } catch (err) {
        console.log(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;
