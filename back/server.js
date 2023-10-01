const express = require("express")
require("dotenv").config()
const port = process.env.PORT
const uri = process.env.MONGO_URI
const cors = require("cors")
const noteRoute = require("./routes/notes")
const mongoose =  require("mongoose")


const app = express()

app.use(cors({
    origin: [],
    methods:["POST","GET","PATCH","DELETE"],
    credentials:true
}))
app.use((req,res,next) =>{
    next()
})

app.use(express.json())


mongoose.connect(uri)
    .then(() =>{
        console.log("Veri tabani baglandi")
        app.listen(port,() =>{
            console.log(`${port}. port dinleniyor`)
        })
    })
    .catch(err => console.log(err))

app.use('/api/notes',noteRoute)