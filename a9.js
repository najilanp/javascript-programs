//w.a.p print pair, whose sum is 6 forthe given array

input=[2,3,4,5]

pairSum=6
for(i=0;i<input.length;i++){
    for(j=i+1;j<input.length;j++)
    if(input[i]+input[j]==pairSum){
        console.log(input[i],input[j]);
    }
}