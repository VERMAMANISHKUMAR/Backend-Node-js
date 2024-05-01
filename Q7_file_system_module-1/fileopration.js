//method 1
// const fs =require('fs')
// //to read file content using blocking code
// console.log('String to read')
//  const buffer=fs.readFileSync('data.txt')
//  console.log(buffer.toString())
//  console.log("This is another operation being berformed")
// -------------------------------------------------------------
//method 2
const fs =require('fs')
//to read file content using blocking code
console.log('String to read')
 const buffer=fs.readFileSync('data.txt',{encoding: 'utf8'})
 console.log(buffer)
 console.log("This is another operation being berformed")