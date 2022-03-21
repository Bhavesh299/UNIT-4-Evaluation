const express = require("express") ;
const {body, validationResult } = require("express-validator");
const router = express.Router() ;
const books = require("../model/book") ;

router.post(
    "/",
    body("likes").iscount({default:0}).withmessage("like is required") ,
    body("coverImage").isLength({min:1}).withmessage("CoverImage is required") ,
   
   async(res,req) => {

        const err = validationResult(req,res) ;
        if (!err.isEmpty ){
            return res.status(400).send({error:err.array()})
        }
        const book = books.create(req.body)
        return res.status(201).send({data:book})
    }
)
module.exports = router