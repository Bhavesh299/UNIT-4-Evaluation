// console.log("Bhavesh")

const express = require("express") ;

const app = express() ;

app.use(express.json()) ;

const connect = require("../config/db")


app.listen( 3500 ,  async() => {
    try {
        await connect() 
        console.log("Listening on port 3500")
    }
    catch (err){
        console.log(err.message)
    }
})

