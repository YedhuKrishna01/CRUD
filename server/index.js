import express from "express"
import mongoose from "mongoose"
import cors from "mongoose"

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.listen(3000,() =>{
    console.log("Server is Running")
})