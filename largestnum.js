num1=40
num2=40

if(num1>num2){
    console.log("largest number is ",num1);
}
else if (num1<num2){
    console.log("largest number is ",num2); 
}
else{
    console.log("equal");
}

console.log(num1>num2?`largest num is ${num1}`:num1<num2?`largest num is ${num2}`:"equal");