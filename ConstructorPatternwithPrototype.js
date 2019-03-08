// constructor pattern with prototype

function Employee(name,dept,salary){
    this.name = name;
    this.dept = dept;
    this.salary = salary;
}

// Print Message is of the type Employee and can be accessed by all objects of Employee
Employee.prototype.PrintMessage = function(){
    return this.name + " works at department:" + this.dept + "and earns " + this.salary;
};

//creating instance of the object
var joel = new Employee("Joel","IT",250000);
var jacob = new Employee("Jacob","Admin",75000);

console.log(joel.PrintMessage());
console.log(jacob.PrintMessage());