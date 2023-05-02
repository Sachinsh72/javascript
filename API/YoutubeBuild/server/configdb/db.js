require("dotenv").config()
// console.log(process.env)

const mongoose = require("mongoose")

const connectToDB = async () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log('Db CONNECTED');
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = connectToDB