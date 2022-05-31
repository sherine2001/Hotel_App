const express= require('express')
const app =express()

const ConfigDB= require('./db')
const roomRoute=require('./routes/roomRoutes')

app.use("/api/rooms",roomRoute)
app.get("/",(req,res)=>{
    res.send("helo")
})

const port= process.env.PORT || 5000
app.listen(port, ()=>console.log("server running on port "+ port))