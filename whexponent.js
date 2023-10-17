const prompt = require('prompt-sync')({sigint:true})
const userInput =prompt("enter the exponent")
exp=Number(userInput)

num=1
low=8
up=36
while(num<=up){

    if((num**exp>=low)&&(num**exp<=up)){
        console.log(num);
       
    }
    num++
}