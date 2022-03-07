const express = require("express") ;
const path = require("path") ;
var app = express() ;
const allpaths = path.join(__dirname,"index")

console.log(allpaths)

const middlelogger = (req ,res ,next ) =>{
    next() ;

}
app.use(middlelogger)

const checkpermission = (req,res,next) => {

    next()
}
app.use(checkpermission)

app.get("/books" , (req,res)=>{

    res.send(
        {route:"/books"}
        );
      
});

app.get("/libraries",(req,res)=>{

    res.send({ route: "/libraries", permission: true});
        
});

app.get("/authors",(req,res)=>{

    res.send(
        { route: "/authors", permission: true}
        );
     
});

app.listen(4200);



