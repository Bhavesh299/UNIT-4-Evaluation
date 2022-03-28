const mongoose = require("mongoose") ;

const ToDoSchema = new mongoose.Schema({

    title:{type : String , require:true}
},
{
    timestamp:true,
    versionkey:false
})


module.exports = mongoose.model("todo" , ToDoSchema)