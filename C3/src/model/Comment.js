const mongoose = require("mongoose") ;

const commentSchema = new mongoose.model({

    body : {type : String,require:true},
    
   
},
{
    timestamp: flase ,
    versionKey:false
});

module.exports = mongoose.model("user" ,commentSchema)