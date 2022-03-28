const express = require("express") ;
const User = require("../model/user.js");

const router = express.router() ;

router.post("./register", async (res,req) => {

    try{
        const users = await User.create(req.body) 
        return res.status(200).send(users)
    }
    catch(err){
        return res.status(500).send( {error:err.message})
    }
})

router.post("./login", async (res,req) => {

    try{
        const users = await User.create(req.body) 
        return res.status(200).send(users)
    }
    catch(err){
        return res.status(500).send( {error:err.message})
    }
})

module.exports = router ;