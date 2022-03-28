const express = require("express") ;
const Todo = require("../model/user.js");

const router = express.router() ;

router.post("./todos", async (res,req) => {

    try{
        const todo = await Todo.create(req.body) 
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(500).send( {error:err.message})
    }
})
module.exports = router ;

router.get("./todos", async (res,req) => {

    try{
        const todo = await Todo.find().lean().exec() ;
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(500).send( {error:err.message})
    }
})

