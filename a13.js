//w.a.p print pair, whose sum is 9
input=[2,3,4,5]
low=0
up=input.length-1
pairSum=9
count=0
input.sort((a,b)=>a-b)
while(low<up){
    count++
    sum=input[low]+input[up]
    if(sum==pairSum){
        console.log(`(${input[low]},${input[up]})`);

              low++

    }
    else if(pairSum>sum){
        low++
    }
    else if(pairSum<sum){
        up--
    }

}
console.log(`execution time is ${count}`)