const express=require('express')
const mongoose=require('mongoose')
const morgan=require('morgan')
const helmet=require('helmet')
const dotenv=require('dotenv')
const cors = require('cors');
const userRouter=require('./routes/users')
const authRouter=require('./routes/auth')
const postRouter=require('./routes/posts')

dotenv.config()

mongoose.connect("mongodb+srv://akshat:akshat@cluster0.gjjpscv.mongodb.net/")
    .then(() => {
        console.log("Connected to DB");    
    })
    .catch(err => {
        console.error("Failed to connect to DB", err);
    });
const app=express()
app.listen(8000,()=>{
    console.log("Server is running at 8000")
})
app.use(cors());
app.use(express.urlencoded({ extended:true }));
app.use(express.json())
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/posts',postRouter)


app.get('/',(req,res)=>{
    res.send("hii")
})