const { default: mongoose } = require("mongoose")

require('dotenv').config();

let URL = process.env.DB_URL;

module.exports.db = async () => {
    try {
        await mongoose.connect(URL);
        console.log("database connected.");

    } catch (error) {
        console.log(error);
    }
}