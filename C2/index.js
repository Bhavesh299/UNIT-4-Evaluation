const express = require("express");
const mongoose = require("mongoose") ;

const app = express() ;

app.use(express.json()) ;

const connect = () => {
    return mongoose.connect(
        "mongodb://127.0.0.1:27017/banks"
    );
};

const userSchema = new mongoose.Schema(
    {
        firstName:  {type:String, required:true },
        middleName:{type:String,required:true},
        lastName:  {type:String, required:true },
        age:{ type: Number , required:true},
        email:{type:String,required:true,unique:true},
        address:{ type:String,required:true},
        gender:{type:String,required:true},
        type:{type:String,required:true},
    },
    
    {
        timestamps:true,
        versionKey:false,
    }
);

const User = mongoose.model("user",userSchema);

const BranchDetail = new mongoose.Schema(
    {
        Name:{type:String,required:true},
        adress:{type:String,required:true},
        IFSC:{type:String,required:true},
        MICR:{type:String,required:true},

    },
    {
        timestamps:true,
        versionKey:false, 
    }

)
const BranchDetails = mongoose.model("BranchDetail",BranchDetail)

const MasterAccount = new mongoose.Schema(
    {
        balance:{type:String,required:true},
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const MasterAccounts=mongoose.model("MasterAccount",MasterAccount)

const SavingsAccount = new mongoose.Schema(
    {
        account_number:{type:String,required:true},
        balance:{type:Number,required:true},
        interestRate:{type:Number,required:true},
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const SavingsAccounts = mongoose.model("SavingsAccount",SavingsAccount)

const FixedAccount = new mongoose.Schema(
    {
        account_number:{type:Number,required:true},
        balance:{type:Number,required:true},
        interestRate:{type:Number,required:true},
        startDate:{type:Number,required:true},
        maturityDate:{type:Number,required:true},
    },
    {
        timestamps:true,
        versionKey:false,
    }

)
const FixedAccounts = mongoose.model("FixedAccount",FixedAccount)

app.get("/users",async(req,res) =>{

    try{
        const users = await User.find().lean().exec()
        return res.status(200).send({users:users})

    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

app.post("/users" ,async(req,res)=>{
    try{
        const users = await User.create(req.body)
        return res.status(201).send(user)
    }
    catch (err){
        return res.status(500).send({message:err.message})

    }

})

app.get("/saving",async(req,res) =>{

    try{
        const users = await SavingsAccounts.find().lean().exec()
        return res.status(200).send({users:users})

    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

app.post("/saving" ,async(req,res)=>{
    try{
        const users = await SavingsAccounts.create(req.body)
        return res.status(201).send(user)
    }
    catch (err){
        return res.status(500).send({message:err.message})

    }

})

app.patch("/saving/:id",async(req,res) => {
    try{
        const user = await SavingsAccounts.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send(user)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})


app.get("/fixed",async(req,res) =>{

    try{
        const users = await FixedAccounts.find().lean().exec()
        return res.status(200).send({users:users})

    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

app.post("/fixed" ,async(req,res)=>{
    try{
        const users = await FixedAccounts.create(req.body)
        return res.status(201).send(user)
    }
    catch (err){
        return res.status(500).send({message:err.message})

    }

})

app.patch("/fixed/:id",async(req,res) => {
    try{
        const user = await FixedAccounts.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send(user)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

app.listen(5400, async() => {
    try{
        await connect()
    }
    catch(err){
        console.log(err)
    }
    console.log("Listening on port 5400")
})







