const mongoose = require('mongoose');

const DB = process.env.DATABASE;
// console.log("\n"+DB+"\n");

mongoose.connect( DB ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // we write these to to not get deprication warnimg
}).then(()=>{
    console.log("DB connected");
}).catch( (err)=> console.log(err) );
