const mongoose = require("mongoose") ;

const userSchema = new mongoose.model({

    firstName : {type : String,require:true},
    lastName : {type : String,require:true},
    age: {type:Number,require:true},
    email: { type:String,require:true},
    profileImages: { type:URL,require:true},
},
{
    timestamp: false ,
    versionKey:false
});

module.exports = mongoose.model("user" ,userSchema)