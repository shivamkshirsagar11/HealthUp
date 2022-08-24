const mongoose = require('mongoose');
const database = (databaseName)=>{
    mongoose.connect(`mongodb://localhost:27017/${databaseName}`,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log(`Connected to Database Collection: ${databaseName}`))
    .catch(()=>console.log(`Could not connect to Database Collection: ${databaseName}`));
}
module.exports = database;