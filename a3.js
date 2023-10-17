//w.a.p to find lowest expenses

expenses = [10000,23000,3400,50000]
lowest=expenses[0]
for(let num of expenses){
    if(num<lowest){
        lowest=num
    }
}
console.log(lowest);