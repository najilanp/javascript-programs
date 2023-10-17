const prompt=require('prompt-sync')({sigint:true})


const userInput1 = prompt("enter 1st number:")
const userInput2 = prompt("enter 2nd number:")
const userInput3 = prompt("enter 3rdnumber:")

let num1=Number(userInput1)
let num2=Number(userInput2)
let num3=Number(userInput3)

//num1

if(num1>num2&&num1>num3){
    console.log("largest num1");
    if(num2>num3){
        console.log("second largest num2");
        console.log("ascending order:",num3,num2,num1);
    }
    else{
        console.log("second largest num3");
        console.log("ascending order:",num2,num3,num1);
    }
}
//num2
else if(num2>num1&&num2>num3){
    console.log("largest num2");
    if(num1>num3){
        console.log("second largest num1");
        console.log("ascending order:",num3,num1,num2);
    }
    else{
        console.log("second largest num3");
        console.log("ascending order:",num1,num3,num2);
    }
}
//num3
else if(num3>num1&&num3>num2){
    console.log("largest num3");
    if(num1>num2){
        console.log("second largest num1");
        console.log("ascending order:",num2,num1,num3);
    }
    else{
        console.log("second largest num2");
        console.log("ascending order:",num1,num2,num3);
    }
}
else{
    console.log("cant process");
}