const mongoose = require("mongoose")

const connectToDB = async () => {
    mongoose.connect("")
    .then((conn) => {
        console.log(`Db CONNECTED`);

    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = connectToDB