//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]

]

//1. district having Highest +ve case 
console.log("---district having Highest +ve case ------------------------------");


highestPoscase=covid_data.reduce((dis1,dis2)=>dis1[2]>dis2[2]?dis1:dis2)

console.log(`District having highest positive case is ${highestPoscase[1]}`);

//2. district having Highest 1st dose vaccine
console.log("--district having Highest 1st dose vaccine---------------------");

highestFirstdose=covid_data.reduce((dis1,dis2)=>dis1[5]>dis2[5]?dis1:dis2)

console.log(`District having Highest 1st dose vaccine  is ${highestFirstdose[1]}`);

//3. district having lowest death rate

console.log("--district having lowest death rate ---------------------");

lowestDeathrate=covid_data.reduce((dis1,dis2)=>dis1[3]<dis2[3]?dis1:dis2)

console.log(`District having lowest death rate is ${lowestDeathrate[1]}`);


//4. sort data with +ve case in descending order
console.log("+ve case in descending order-------------");
covid_data.sort((dis1,dis2)=>dis2[2]-dis1[2]).forEach(item=>console.log(item[1]));


//5. Is district with +ve cases > 15000
console.log("Is district with +ve cases > 15000:" ,covid_data.some(dis=>dis[2]>15000)?"yes":"no")

//6. sort data with 1st dose vaccine
console.log("sort da with 1st dose vaccine----------------------");
covid_data.sort((dis1,dis2)=>dis1[5]-dis2[5]).forEach(item=>console.log(item[1]));

//7. Print Thrissur details
console.log("Thrissur details-------------------------------");
// for(let details of covid_data){
//     if(details[1]=="Thrissur")
//     console.log(details);
// }
Thrissur=covid_data.find(details=>details[1]=="Thrissur")
console.log(Thrissur);




//8. Print total number of positive cases
console.log("total number of positive cases------------------");

totalPoscase=covid_data.map(details=>details[2]).reduce((poscase1,poscase2)=>poscase1+poscase2)
console.log(`total num of positive cases:${totalPoscase}`);
console.log(covid_data.map(details=>details[2]).reduce((p1,p2)=>p1+p2));

//9. Print total number of curred cases

console.log("total number of curred cases ------------------");

totalCuredcase=covid_data.map(details=>details[4]).reduce((curedcase1,curedcase2)=>curedcase1+curedcase2)
console.log(`total num of cured cases:${totalCuredcase}`);


//10. Print curred cases in Idukki
console.log("curred cases in Idukki-----------------");

idukkiCuredcase=covid_data.find(details=>details[1]=="Idukki")
console.log("cured cases in idukki",idukkiCuredcase[4]);