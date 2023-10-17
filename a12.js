numArray = [10,11,1,2,3,14]


low=0
up=numArray.length-1
search=20
isPresent=false
count=0
numArray.sort((a,b)=>a-b)
while(low<=up){
    count++

    mid=Math.floor(low+up/2)
    if(search==numArray[mid]){
        isPresent=true
        break
    }
    else if(search>numArray[mid]){
        low=mid+1
    }
    else if(search<numArray[mid]){
        up=mid
    }
    
}

console.log(`execution time is ${count}`);
console.log(isPresent?`${search} is present`:`${search}is not present`);