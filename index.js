/*const {display,getDetails} =require("./student");
display();
getDetails();
console.log("hello world");
console.log("server");
console.log("hello");*/


const mongoose=require("mongoose")
const http = require("http");
const dotenv = require("dotenv");
const express = require("express");
const taskController=require("./controller/taskController");
dotenv.config();


// using http
/*const server =http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello World");
});

server.listen(8000,()=>{
    console.log("server is running on 8000");
})

server.listen(process.env.PORT,()=>{
    console.log("server is running on",process.env.PORT);
})*/


//using express
const app=express();
app.use(express.json());

app.post("/tasks",taskController.createTask);

app.get("/tasks",taskController.getTasks);

app.get("/tasks/:id",taskController.getTaskById);

app.patch("/tasks/:id",taskController.updateTask);

app.listen(process.env.PORT,()=>{
    console.log("Server running on",process.env.PORT);
});

app.post("/",(req,res)=>{
    res.status(200).json(req.body);
});

app.get("/:id",(req,res)=>{
    res.status(200).json({
        message:"hello",
        id:req.params.id
    });
    res.send("GET request");
})

//connecting to mongodb
mongoose.connect("mongodb+srv://akash_nair:Aakash77@gettingstarted.xqh1h8q.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Db connected");
}).catch((err)=>{
    console.log(err);
})