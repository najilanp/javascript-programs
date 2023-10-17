class Employee{

    constructor(id,name){
        this.empid=id
        this.empname=name
    }
    printEmployee(){
        console.log("emp details are");
        console.log(`id:${this.empid}
        name:${this.empname}`);
    }
}

let emp1=new Employee(1000,"name")
emp1.printEmployee()