import express from "express";
import Connection from "./connection.js";
import User from "./Schema/user.js";
import bodyParser from "body-parser";

let app = express();
app.use(bodyParser.json())

app.get("/",async(req,res)=>{
    let data = await User.find()
    res.send(data)
})

app.post("/post",async(req,res)=>{
    let body = req.body
    try{
        let value = await User.insertMany(body)
        res.status(201).send({message:"Data created",value})
    }catch(error){
        console.log(error)
    }
})

Connection().then(
    console.log("Connection Done")
)

app.listen(8000,()=>{
    console.log("connected To port")
})