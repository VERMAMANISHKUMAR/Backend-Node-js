// app.js
import { add, subtract, multiply, divide } from './same.mjs';
console.log(add(4,5))
console.log(subtract(4,5))
console.log(multiply(4,5))
console.log(divide (4,5))

// function calculate() {
//   const num1 = parseFloat(document.getElementById('num1').value);
//   const num2 = parseFloat(document.getElementById('num2').value);
//   const operator = document.getElementById('operator').value;
//   let result;

//   switch (operator) {
//     case '+':
//       result = add(num1, num2);
//       break;
//     case '-':
//       result = subtract(num1, num2);
//       break;
//     case '*':
//       result = multiply(num1, num2);
//       break;
//     case '/':
//       result = divide(num1, num2);
      
//       break;
//     default:
//       result = 'Invalid operator';
//   }

//   document.getElementById('result').textContent = `Result: ${result}`;
// }

// document.getElementById('calculateBtn').addEventListener('click', calculate);
