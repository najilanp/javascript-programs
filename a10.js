//w.a.p to display all common numbers from given 2 arrays

inp1=[10,11,12,20,30]
inp2=[11,20,21,30,31]

for(let i of inp1){
    for(let j of inp2){
        if(i==j){
            console.log(i);
            break
        }
     }
}