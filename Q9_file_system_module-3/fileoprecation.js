
const fs = require('fs');//import the patth

//1. Reading the data

fs.readFile('data.txt',(err,data)=>{
          if(err){
                    console.log('your code in err plz currect code')
          }
          else{
                    console.log(data.toString())
          }
})
console.log('I am read the file')
// --------------------------------------------------------------

// 2. Write the data in file
fs.writeFile('Employee.txt','My New Employee' , (err)=>{
          if(err){
                    console.log('Your code in error plz curect the code');
          }
          else{
                    console.log('my file is writen');
          }
})
// -----------------------------------------------------------------
// 3 . sapoje your file in other item add then use the apendFilefunction
fs.appendFile('Employee.txt','\n my new employee name:- manish',(err)=>{
          if(err){
                    console.log('your code error');
          }
          else{
                    console.log('file is updated')
          }
})

console.log('This is another opration');
// ----------------------------------------------------------------------
//4. file is deleted

// fs.unlink('Employee.txt' , (err)=>{
//           if(eer){
//                     console.log('your code in err');
//           }
//           else{
//                     console.log('your file is deleted')
//           }
// })