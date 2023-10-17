const prompt = require("prompt-sync")({sigint:true})
const userInput = prompt("enter a number:")
num = Number(userInput)
originalnum=num

reverse = 0
while(num!=0){
    reverse = (reverse*10)+(num%10)
    num=parseInt(num/10)
}
console.log(originalnum==reverse?"number is palindrome":"number is not a palindrome");