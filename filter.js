a=[10,20,30,5,3,4]

//1.print all even number
evenArray=a.filter(num=>num%2==0)
console.log(evenArray);




//2.print all number,which is greater than 15

console.log(a.filter(num=>num>15));

//3 num>15 num-1 num<15 num+1
console.log(a.map(num=>num>15?num-1:num+1));
   
