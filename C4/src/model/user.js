const Mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    email:{type:String,require:true},
},
{
    timestamp:true,
    versionkey:false

})

