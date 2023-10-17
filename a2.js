//w.a.p to find highest expenses

expenses = [10000,23000,3400,50000]
highest=0
for(let num of expenses){
    if(num>highest){
        highest=num
    }
}
console.log(highest);