
const prompt =require('prompt-sync')({sigint:true})
const userInput = prompt("enter your input")
num=Number(userInput)
output=0
while(num>0){
lastDigit=num%10
output+=lastDigit**3
num=Math.floor(num/10)
}

console.log(userInput==output?`${userInput} is an amstrong number`:`${userInput}not amstrong`);