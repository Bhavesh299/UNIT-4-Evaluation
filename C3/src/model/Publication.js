const mongoose = require("mongoose") ;

const publicationSchema = new mongoose.model({

    name : {type : Number,require:true},
    
   
},
{
    timestamp: flase ,
    versionKey:false
});

module.exports = mongoose.model("user" ,publicationSchema)