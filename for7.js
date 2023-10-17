//w.a.p to find gcd/hcf

const prompt=require('prompt-sync')({sigint:true})
const userInput1=prompt("enter first number")
const userInput2=prompt("enter second number")
const num1 =Number(userInput1)
const num2 =Number(userInput2)

gcd=0
if(num1<num2){
   for(i=1;i<=num1;i++){
    if(num1%i==0&&num2%i==0){
        gcd=i
    }
  }
    console.log(`GCD(${num1},${num2})=${gcd}`);
   }
   else{
    for(i=1;i<=num2;i++){
        if(num1%i==0&&num2%i==0){
            gcd=i
        }
      }
        console.log(`GCD(${num1},${num2})=${gcd}`);
       }
   
