const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const url=process.env.MONGO_URL || "mongodb://localhost:27017/useappDB";

const connectDB=async()=>{
    try{
        await mongoose.connect(url)
        console.log("MONGODB Connected");
    }
    catch(err){
        console.log("DB Error",err.message);
    }
}

module.exports=connectDB;