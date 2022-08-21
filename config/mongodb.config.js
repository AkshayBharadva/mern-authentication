const mongoose = require("mongoose");

const uri = require('./keys').mongoURI;

const connect = async () => {

    mongoose
        .connect(
            uri,
            { useNewUrlParser: true }
        )
        .then(() => console.log("MongoDB successfully connected"))
        .catch(err => console.log(err));
}

module.exports = connect;