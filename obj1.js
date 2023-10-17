let employee={
    empId:1000,
    empName:"Max Miller",
    empDesg:"Developer",
    empSalary:35000,
    empLocation:"New Jersey"
}

//display name
console.log(`employee name is ${employee["empName"]} and his designation is ${employee.empDesg}`);






//to check a key is available in an object or not using in operator

// if("employeeExperience" in employee){
//     console.log(`employee experience is ${employee["employeeExperience"]}`);
// }
// else{
//     employee["employeeExperience"]=3
//     console.log("employee details are",employee);
// }


if("empexprnce" in employee){
    console.log(employee["empexprnce"]);
}
else{
    employee["empexprnce"]=3
    console.log(employee);
}



//check employee is vaccinated or not, if not the update vaccination status of employee
if("empVaccinated" in employee){
    console.log(`${employee["empVaccinated"]}`);
}else{
    employee["empVaccinated"]="no"
    console.log("employee details are",employee);

}

//increment salary by 5000
employee["empSalary"]+=5000
console.log(employee["empSalary"]);
console.log(employee);


//display employee details one by one

for(let key in employee){
    console.log(`${key}: ${employee[key]}`);
}

