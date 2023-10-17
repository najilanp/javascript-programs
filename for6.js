//w.ap to check a number is prime or not
 const prompt=require('prompt-sync')({sigint:true})
 const userInput=prompt("enter a number")
 const num =Number(userInput)

isPrime=true
for(i=2;i<num;i++){
   if(num%i==0){
        isPrime=false
        break
    }
    
}

console.log(isPrime?`${num}prime number`:`${num}not a prime number`);