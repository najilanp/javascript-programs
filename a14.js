inp1=[10,11,12,20,30]
inp2=[11,20,21,30,31]
inp1.sort((a,b)=>a-b)
inp2.sort((a,b)=>a-b)
count=0
p=0
q=0
while(p<inp1.length&&q<inp2.length){
    count++
    if(inp1[p]==inp2[q]){
        console.log(inp1[p]);
        p++
        q++
    }
    else if(inp1[p]<inp2[q]){
        p++
    }
    else if(inp1[p]>inp2[q]){
        q++
    }
}
console.log(`execution time is ${count}`);



