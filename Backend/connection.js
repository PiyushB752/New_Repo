import  Mongoose  from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export default async function Connection(){
    try{
        await Mongoose.connect(process.env.MY_API)
    }catch(error){
        console.log(error)
    }
}