input=[4,5,6]
//output=[11,10,9]
sum=0
output=[]
console.log("input=",input);
for(let item of input){
    sum+=item
}
for(let item of input){
  output.push(sum-item)  
}

console.log("output=",output);