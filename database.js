const mongoose = require('mongoose');

class Database {

    constructor()   {
        this.connect();
    }

    connect()   {
        mongoose.connect("mongodb+srv://VinhLe:Nevermore3900@twitter-clone.rpxza.mongodb.net/Twitter-Clone-DB?retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection successful");
        })
        .catch((err) => {
            console.log("database connection error " + err);
        })
    }
    
}

module.exports = new Database();