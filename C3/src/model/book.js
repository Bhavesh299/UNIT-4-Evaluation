const mongoose = require("mongoose") ;

const bookSchema = new mongoose.model({

    likes : {type : Number,require:true},
    coverImage : {type : String,require:true},
    content: {type:Number,require:true},
   
},
{
    timestamp: flase ,
    versionKey:false
});

module.exports = mongoose.model("user" ,bookSchema)