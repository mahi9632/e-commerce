const mongoose = require('mongoose');
const config = require('./keys')
const db = config.MONGO_URI


const connectDb = async() =>{
    try{
        await mongoose.connect(db,{
            useNewUrlParser : true,
            useUnifiedTopology:true,
        }).then(res=>console.log("DB connected"))
    } catch (err){
        console.log(`connection Failed ${err}`);
        process.exit(1);
    }
};


module.exports = connectDb
