import mongoose from "mongoose";
import express from 'express'

const app=express();

//connection to mongodb
async function  connect() {
    await mongoose.connect("mongodb://localhost:27017/databas")
}

connect().then(()=>{
    console.log("database connected successfully")
})
 
app.get('/signup',(req,res)=>{

})

app.listen(3000)