//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

//1. display all product name
products.forEach(details=>console.log(details[1]))

console.log('-----------------');
//2. display product whose price < Rs.50
products.filter(details=>details[2]<50).forEach(details=>console.log(details[1]))
console.log('-----------------');

//3. print price of oreo

oreo=products.find(details=>details[1]=="oreo")
console.log("price of oreo:",oreo[2]);

console.log('-----------------');


//4. print costly product name
costlyProduct=products.reduce((p1,p2)=>p1[2]>p2[2]?p1:p2)
console.log("costly product is",costlyProduct[1]);

console.log('-----------------');

//5. display out of stock product
console.log("display out of stock product");
products.filter(details=>details[3]==0).forEach(details=>console.log(details[1]))


console.log('-----------------');

//6. sort products based on stock in decsending order
console.log('sort products based on stock in decsending order');
products.sort((product1,product2)=>product2[3]-product1[3]).forEach(details=>console.log(details[1]))
console.log('-----------------');

//7. print product having maximum available stock
maxStock=products.reduce((product1,product2)=>product1[3]>product2[3]?product1:product2)
console.log("product having maximum available stock is",maxStock[1]);


console.log('-----------------');

//8. is there any product can be purchased by Rs. 10
console.log("is there any product can be purchased by Rs. 10:",products.some(details=>details[2]<=10)?"yes":"no");


//9. Is there any product in the range of 10 to 30
console.log('-----------------');
console.log("is there any product in the range of 10 to 30: ",products.some(details=>details[2]>=10&&details[2]<=30)?"yes":"no");


//10. print all products in the range of 10 to 30
console.log('print all products in the range of 10 to 30');



range=products.filter(details=>details[2]>=10&&details[2]<=30).forEach(details=>console.log(details[1]))



