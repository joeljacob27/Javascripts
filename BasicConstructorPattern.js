//Basic constructor pattern

function employee(name,dept,salary){
    this.name = name;
    this.dept = dept;
    this.salary = salary;

    this.PrintMessage=function(){
        return this.name + " belongs to the department:" + this.dept + " and earns " + this.salary;
    };
}

    //instances of the employee

    var joel = new employee("Joel","IT",150000);
    var jacob = new employee("Jacob","Admin",75000);

    //calling the method
    console.log(joel.PrintMessage());
    console.log(jacob.PrintMessage());

