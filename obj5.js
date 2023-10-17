//find the first recursive character from the given 

pattern="abbbcd"
charArray=pattern.split('')
output={}
for(let char of charArray){
    // console.log(char);
    if(char in output){
    console.log(`first recursive char in ${pattern} is ${char}`);
    break
    }
    else{
       output[char]=1
    
    }
}


output={}
chararray=pattern.split("")
for(let chr of chararray){
    if(chr in output){
        console.log(`first recursive char in ${pattern}is ${chr}`);
        break
    }
    else{
        output[chr]=1
    }
}



//display  number count
numArray=[10,20,30,40,20,30,50,30,20,10,60,70,40]

output={}

// for(let num of numArray)

// if(num in output){
//     output[num]+=1
// }
// else{
//     output[num]=1
// }
// for(let num in output){
// console.log(`${num}:${output[num]}`);
// }

///////////or
numArray.map(num=>num in output?output[num]+=1:output[num]=1)

console.log(output);