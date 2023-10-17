str="hello"
// console.log(Array.from(str));

//extract vowels

vowels=['a','e','i','o','u','A','E','I','O','U']
str.split('').filter(char=>vowels.includes(char)).forEach(items=>console.log(items))

      //or
// Array.from(str).filter(char=>vowels.includes(char)).forEach(items=>console.log(items))

        //or
// for(char of charcters){
//     if(vowels.includes(char)){
//         console.log(char);
//     }
// }

//two strings are anagram
str1='kin'
str2='ink'

str.split('')

if(str1.length==str2.length){
let a=str1.split('').sort().join("")
let b=str2.split('').sort().join("")
if(a==b){
    console.log(`${str1} and ${str2} are anagram`);
}else{
       console.log(`${str1} and ${str2} are not anagram`);
 
}

}
else{
    console.log("invalid input");
}



