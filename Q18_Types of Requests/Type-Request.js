const express=require('express');
const server=express();
server.get('/',(req,res,next)=>{
          console.log("This is my first middleware");
          next();
})
//Get request
server.get('/',(req,res)=>{
          res.send('Hello world! This is Express server,get request')

})
//post Request
server.post('/',(req,res)=>{
          res.send("This is my post Element")
})
//put Request
server.put('/',(req,res)=>{
          res.send("This is my put Element")
})
//Delete Request
server.delete('/',(req,res)=>{
          res.send("This is my delete Elemnet")
})
//Assing the server port
server.listen(3200,()=>{
          console.log("Server runing address http//localhost:3200")

}
)