
class Employee{
    //properties
    // empID
    // empName
    // empSalary
    //methods / functions
    //constructors initialise class properties
    constructor(id,name,salary,desg){
        this.empId =id
        this.empName=name 
        this.empSalary=salary 
        this.empDesgnation=desg
    }
    printEmployee(){
        console.log("---employee details are---");
        console.log(`
        Id:${this.empId} 
        Name:${this.empName}
        Desgnation:${this.empDesgnation}
        Salary:${this.empSalary}
        `);
    }
}
//object
let emp1 = new Employee(1001,"max",2345,"developer")
let emp2 = new Employee(1002,"maxmiller",20345,"developer")

emp1.printEmployee()
emp2.printEmployee()