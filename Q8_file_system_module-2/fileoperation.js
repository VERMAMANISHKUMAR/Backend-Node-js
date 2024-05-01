// //Create and write a file
// const fs = require('fs')
// try {
//       FileSystem.writeFileSync('emp.txt' , 'name:-ganesh , age:-67 , position:- maneger');
//         } 
//         catch(err) {
//           console.log(err);
//         }
//         console.log('This is another operation being performed')

// -------------------------------------------------------

const fs = require('fs')

// To read file content using blocking code.

// console.log('Starting to read')

// const buffer = fs.readFileSync('cmp.txt', { encoding: 'utf8' })
// console.log(buffer)
// *************************************************************
// Creating and Writing a file.
try {
  fs.writeFileSync('emp.txt', "The world has enough coders")
} catch (err) {
  console.log(err)
  
}

// --------------------------------------------------------
// // Append another employee data
 fs.appendFileSync('emp.txt', ' The world has enough coders ' + 'BE A CODING NINJA')

// // Deleting a file 
// try {
//   fs.unlinkSync('emp.txt')
// } catch (err) {
//   console.log("File doesn't exist")
// }

// console.log('This is another operation being performed')