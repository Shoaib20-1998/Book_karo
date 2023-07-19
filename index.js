const express = require('express')
require("dotenv").config();

const app =express()

app.get('/',(req,res)=>{
    res.send("hy")
})

app.listen(process.env.port,()=>{
    console.log("running")
})