const express=require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const app=express()
const mongoose=require("mongoose")
const routes=require("./Routes/Route.js")

 require('dotenv').config();

const PORT=process.env.PORT_NO






 mongoose.set('strictQuery',true);

 const mongoDB =process.env.URL
mongoose.connect(mongoDB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use("/",routes)

 app.get("/getkey",(req,res)=>{
  res.status(200).json({key:process.env.API_KEY})
 })

app.listen(PORT,()=>{
    console.log(`app running on port no ${PORT} `)
})