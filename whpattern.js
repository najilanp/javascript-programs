
const prompt =require('prompt-sync')({sigint:true})
const userInput = prompt("enter your input")
num=Number(userInput)
count=0
str=""
sum=0
while(count<num){
    str+=num
    sum+=Number(str)
    
    count++
}
console.log(sum);