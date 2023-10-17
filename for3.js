// w.a.p to print factorial of a num
const prompt=require('prompt-sync')({sigint:true})
const userInput=prompt("enter a num")
num=Number(userInput)
fact=1
var i
for(i=num;i>0;i--){
    fact*=i
    
}
console.log(fact);


