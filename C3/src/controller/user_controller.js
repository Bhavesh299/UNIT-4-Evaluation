const express = require("express") ;
const {body, validationResult } = require("express-validator");
const router = express.Router() ;
const User = require("../model/user.js") ;

router.post(
    "/",
    body("firstName").isLength({min:3,max:30}).withmessage("Name sholud be 3 to 30 charter") ,
    body("lasttName").isLength({min:3,max:30}).withmessage(" LastName is required") ,
    body("age").isInt({min:1,max:150}).withmessage(" Age is required") ,
    body("email").isEmail().withmessage(" Valid email required") ,


    async(res,req) => {

        const err = validationResult(req,res) ;
        if (!err.isEmpty ){
            return res.status(400).send({error:err.array()})
        }
        const user = User.create(req.body)
        return res.status(201).send({data:user})
    }
)
module.exports = router