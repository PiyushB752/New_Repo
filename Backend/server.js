import express from "express";
import Connection from "./connection.js";

let app = express();

app.get("/",async(req,res)=>{
    res.send("working...//")
})

Connection().then(
    console.log("Connection Done")
)

app.listen(8000,()=>{
    console.log("connected To port")
})