const express=require('express')
//create the server
const server=express();
//handle default request.
function firstMiddleware(req,res,next){
          console.log("This is first middleware");
          next();
}
function secondMiddleware(req,res,next){
          console.log("This is 2nd middleware");
          next();
}
server.get('/ ',firstMiddleware,secondMiddleware, (req,res)=>{
          res.send('Hello world! This is Express Server');
});
//Listen on specified port
server.listen(3100,()=>{
          console.log("Server is listening at http://localhost:3100");
})