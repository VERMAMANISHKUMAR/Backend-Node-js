const express =require('express')
//Create a Server
const server=express();
//Handle default request
server.get("/",(req,res)=>{
          res.send('Wellcome to Express server')
})
//Listen on Specified port.
server.listen(3100,()=>{
          console.log('Server is listening on 3100')
})