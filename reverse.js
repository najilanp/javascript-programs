//method 1
// const prompt =require('prompt-sync')({sigint:true})
// const userInput = prompt("enter a number:")
// num = Number(userInput)

// reverse = 0
// while(num!=0){
//     reverse = (reverse*10)+(num%10)
//     num=parseInt(num/10)
// }
// console.log(reverse);


//method2

input=123
num=input
str=""
while(num>0){
    lastDigit=num%10
    str+=lastDigit
    num=Math.floor(num/10)
}

console.log(`input =${input}`);
console.log(`output=${str}`);