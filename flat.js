a=[
[10,20],[30,45],[56,67],[89,37],[25,100]
]

//1.print all numbers>50
newArray=a.flat(Infinity)
console.log(newArray);
greaterthanFifty=newArray.filter(num=>num>50)
console.log(greaterthanFifty);



// console.log(a.flat(Infinity).filter(num=>num>50));

//2. print square of each number in rhe given array
console.log(newArray.map(num=>num**2));



//3. find total sum of all nu/mbers in the given array

console.log(newArray.reduce((num1,num2)=>num1+num2));

//4.find highest number in the given array
console.log(newArray.reduce((num1,num2)=>num1>num2?num1:num2));