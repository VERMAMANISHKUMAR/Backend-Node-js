//1 Import readline
const readline=require("readline");

//2 Configure interface to connect with terminal/command line
const interface=readline.createInterface({
          input:process.stdin,output:process.stdout
});
// -------------------------------
//3. Reading Value
// interface.question("Enter first number",(num1)=>{
//           interface.question("Enter second number",(num2)=>{
//                     const sum=Number(num1)+Number(num2);
//                     console.log(sum)
//           })
// })
// ---------------------------------------------------------
interface.question("Enter first Blogs",(str1)=>{
                    const sum=(str1);
                    console.log(sum)
          })

