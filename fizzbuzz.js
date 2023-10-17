
// import prompt-sync
const prompt =require('prompt-sync')({sigint:true})
const userInput =prompt("enter a number:")
let num = Number(userInput) 
// console.log(num,typeof num)


console.log(num%15==0?"fizzbuzz": num%5==0? "buzz" : num%3==0?"fizz":"nothing");