a=[1,2,3,4,5,6,7]

//1 total sum
total=a.reduce((num1,num2)=>num1+num2)
console.log(`total is ${total} `);




//2 smallest

smallest=a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(`smallest number is ${smallest}`);

//3 highest

highest=a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(`highest number is ${highest}`);

