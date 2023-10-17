

//[ id,name,designation,location,salary,experience]
employee = [
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',15000,2],
    [1002,'Maxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

//find employee with highest salry
highestSalary=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(`highest salary is for ${highestSalary[1]} and salary is ${highestSalary[4]}`);

//find employee with lowest salary
lowestSalary=employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(`lowest salary is for ${lowestSalary[1]} and salary is ${lowestSalary[4]}`);


lowestfirstSalary=employee.reduceRight((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(`first lowest salary is for ${lowestfirstSalary[1]} and salary is ${lowestSalary[4]}`);


//find total salary 

totalSalary=employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(`totalsalary is ${totalSalary}`);



//1. print all employee name
console.log("----------------------all employee name------------------------");

employee.forEach(emp =>console.log(emp[1]))
// for(let emp of employee){
//     console.log(emp[1]);
// }

//2.print total number of employee
console.log("-----------total number of employee-----------");
console.log(employee.length);

//3. print developer employee details
console.log("---------------------developer employee details------------------------");

// for(let emp of employee){
//    if(emp[2]=="developer")  {
//     console.log(emp);
//    }  
// }

employee.filter(emp=>emp[2]=="developer").forEach(emp=>console.log(emp[1]))


//4. print employee whose salary > 30000
console.log("----------------------salary greater than 30000--------------------");

// for(let emp of employee){
//     if(emp[4]>30000){
//         console.log(emp);
//     }
// }
employee.filter(emp=>emp[4]>30000).forEach(emp=>console.log(emp[1]))


//5. print details of employee Laisha
console.log("--------------employee liasha details--------------------");

// for(let emp of employee){
//     if(emp[1]=='Laisha'){
//         console.log(emp);
//     }
// }

laisha=employee.find(emp=>emp[1]=='Laisha')
console.log(laisha);


//6. Sort employee based on their salary in descending order

console.log("-----------------------------salary in descending order-------------------------------------");
    // employee.sort((a,b)=>b[4]-a[4])
    // console.log(employee);
    employee.sort((a,b)=>b[4]-a[4]).forEach(emp=>console.log(emp[1]))

 
//7. Sort employee based on their experience in ascending order

console.log('-------------------based on experience----------------------------------');
// employee.sort((a,b)=>a[5]-b[5])
// console.log(employee);
employee.sort((a,b)=>a[5]-b[5]).forEach(emp=>console.log(emp[1]))