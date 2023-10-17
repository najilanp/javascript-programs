// arithmetic
// % modulus(division rermainder)

num1=10
console.log("num1/3=", Math.floor(num1/3));
console.log("num1%3=", num1%3);

// exponential

console.log("4^2 =",4**2);


// increment
x=10
x++ //x=x+1
console.log(x);


// decrement
x=10
x--//x=x-1
console.log(x);


// shorthand operators

a=10
a+=20 // a=a+20
console.log(a); //30

// relational operators
num1=10
num2=20
console.log("num1>num2" ,num1>num2);
console.log("num1==num2" ,num1==num2);
num3="10"
console.log("num1===num3" ,num1===num3);

// ternary
console.log(num1>20?"success":"fail");

// logical

console.log(num1==10&&num2==40);

// swapping

console.log(`before swapping num1=${num1} ,num2=${num2}`);

var temp
temp=num1
num1=num2
num2=temp
console.log(`after swapping num1=${num1} ,num2=${num2}`);
