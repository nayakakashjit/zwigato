// Database Connection

const mongoose = require('mongoose');
const url = "mongodb+srv://root:root123@cluster0.o5no0fi.mongodb.net/zwigatoDB";
mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser : true,useUnifiedTopology: true })
        .then(()=> console.log('Successfully connected to the database'))
        .catch((err)=> {
            console.log('Could not connect to the database. Exiting now...');
            console.log(err);
            process.exit();
        })
module.exports = mongoose;