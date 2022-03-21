const express = require("express") ;

const app = express() ;
app.use(express.json()) ;

const connect = require("./config/db.js")

// const userController = require("./controller/user_controller.js")
// app.use("/users",userController)
// const bookController = require("./controller/book_controller.js")
// app.use("/book",bookController)


app.listen(3200,async() => {

    try{
        await connect() 
        console.log("listening on port 3200")
    }
    catch(error){
        console.log(error.message)
    }
})


