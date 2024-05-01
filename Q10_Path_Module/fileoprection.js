const fs = require('fs') //import module
const path =require ('path') //import path module
//const filepath=path.join('src','home','data.txt');
const filepathResolved=path.resolve('src','home','data.txt');
//console.log(filepath);
 console.log(filepathResolved)
// fs.readFile(filepathResolved,(err,data)=>{
//           if(err){                   console.log(err);
//           }        
//           else{
//                     console.log(data.toString())
//           }
// })
 