/* Q04. Create a class called Employee with three properties: name, position, and salary. The class should have a
method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
call the getSalary method.*/

class Employee{
    name
    position
    salary

    constructor(name,position,salary){
        this.name = name
        this.position = position
        this.salary = salary
    }
    getSalary(){
        return this.salary
    }
}

const e = new Employee("Sachin","Software Developer",90000);

console.log(e.getSalary());
