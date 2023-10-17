//w.a.p to ckeck 2 is present in the given array


numArray=[10,11,1,21,3,14]
search=2
isPresent=false
for(let num of numArray){
    if(num ==search){
        isPresent=true
        break
    }
   
}
console.log(isPresent?`${search} is present` : `${search} is notpresent`);
