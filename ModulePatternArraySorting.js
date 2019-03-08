var empArray = (function(){

    var empbase=[];
    var tmpbase=[];
    function employeeIntro(){
        console.log("Welcome to employee register");
    }
    function empBaseLength(){
        return empbase.length;
    }

    function sortEmpBase(){
        for(i=0;i<empBaseLength();i++){
            for(j=i+1;j<empBaseLength();j++){
                if(empbase[i].employeeId > empbase[j].employeeId){
                    tmpbase[i] = empbase[i] ;
                    empbase[i] = empbase[j] ;
                    empbase[j] = tmpbase[i] ; 
                }                
            }
        }
    }    
    
    return{
        addEmp:function(values){
            empbase.push(values);
            console.log("employee added");
        },

        showAllEmp:function(values){
            for(i=0;i<empBaseLength();i++){
                console.log("employee: "+ empbase[i].employeeId + " and Salary:" + empbase[i].salary);
            }
            
        },

        getEmpCount:function(){
           console.log("Total employeee count = " + empBaseLength());
        },

        //Public alias of private function
        empIntro:employeeIntro,

        getAvgSalary:function(){
            var count = empBaseLength(), sal =0;
            while(count--){
                 sal += empbase[count].salary;
            }

            var avgSal = sal/empbase.length;
            console.log("The average salary is :"+ avgSal);          
        },

        getEmpDetails:function(eid){
            var count = empBaseLength();
            while(count--){
                if (empbase[count].employeeId === eid){
                    console.log("Employee id:" + empbase[count].employeeId + " and Salary:" + empbase[count].salary) ;
                }
                return;
            }
            console.log("Employee id: "+eid+" is not found!" );
        },

        sortRecords : sortEmpBase

    }
})();


empArray.empIntro();

//Adding employee
console.log("Adding employees....");
empArray.addEmp({
    employeeId : 1001,
    salary : 50000

});
empArray.addEmp({
    employeeId : 1005,
    salary : 40000

});
empArray.addEmp({
    employeeId : 1003,
    salary : 80000

});

empArray.addEmp({
    employeeId : 1002,
    salary : 150000

});


empArray.addEmp({
    employeeId : 1004,
    salary : 120000

});

//Getting employee count
console.log("Getting employee count...");
empArray.getEmpCount();

//Getting average salary of employees
console.log("Getting average salary of employees...");
empArray.getAvgSalary();

//Search for employee 1002
console.log("Getting details of employee 1002...");
empArray.getEmpDetails(1002);

//List all employees
console.log("Show all employeeId - Unsorted...");
empArray.showAllEmp();

//Sort employees based on employeeId
console.log("Sorting employees on ascending order of employee id...");
empArray.sortRecords();

//List all employees after sort
console.log("Show all employeeId - Sorted...");
empArray.showAllEmp();
