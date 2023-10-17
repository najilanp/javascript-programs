
products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only




products.forEach(item=>console.log(item.pName))
console.log("-------------------------------------------");

//2. print all mobile details whose display is lcd



    products.filter(items=>items.display=='lcd').forEach(items=>console.log(items.pName))
    console.log("-------------------------------------------");

//3. print 5g mobile phone name
products.filter(items=>items.band=='5g').forEach(items=>console.log(items.pName))


console.log("--------------------");
//4. sort mobile based on price
products.sort((p1,p2)=>p1.price-p2.price).forEach(items=>console.log(items.pName))

console.log("--------------------");
//5. print costly mobile
costlyMobile=products.reduce((p1,p2)=>p1.price>p2.price?p1:p2)

console.log(costlyMobile.pName);
console.log("--------------------");
//6. print low cost mobilecostlyMobile=
lowcostMobile=products.reduce((p1,p2)=>p1.price<p2.price?p1:p2)
console.log(lowcostMobile.pName);