//functions
//w.a.p to add to numbers

console.log('Addition of 2 numbers');
//function call
// sum(12,2)

//function definition
// function sum(num1,num2){
//    console.log("inside sum function");
//    result=num1+num2
//    console.log(`${num1}+${num2}=${result}`);
//    return result
// }

//arrow-function4
const sum=(num1,num2)=>{
    console.log("inside sum function");
    return num1+num2
}


//function call

// console.log(sum(1,2));//undefined (use return statement to grt output in call .return write in last of definition)
console.log("result:",sum(10,20));