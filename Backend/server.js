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

    let data = await User.find({email:body.email})
    if(data.length > 0){
        return res.status(401).send({message:"user already exist."})
    }

    try{
        let value = await User.insertMany(body)
        res.status(201).send({message:"Data created",value})
    }catch(error){
        console.log(error)
    }
})

app.patch("/update/:id",async (req,res)=>{
    let body = req.body
    let id = req.params.id
    
    try {
        let value = await User.findByIdAndUpdate(id,body,{ new: true })
        res.status(201).send({message:"data uploaded",value})
    } catch (error) {
        console.log(error)
    }
})

app.delete("/delete/:id",async(req,res)=>{
    let id = req.params.id
    try {
        let del = await User.findByIdAndDelete(id)
        res.status(200).send({message:"Deleted sucessfully"})
    } catch (error) {
        console.log(error)
    }
})

Connection().then(
    console.log("Connection Done")
)

app.listen(8000,()=>{
    console.log("connected To port")
})