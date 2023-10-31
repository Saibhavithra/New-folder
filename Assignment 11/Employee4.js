class Employee{
    constructor(Name, Designation, Work_hours,salary){
        this.Name =Name;    
        this.Designation =Designation;
        this.Work_hours = Work_hours;
        this.salary = salary;       

    }
}

function send()
{
    
    let Name = document.getElementById("Name").value;
    let Designation = document.querySelector('input[type=radio]:checked').value;
    let Work_hours = document.getElementById("hours").value;
    let salary;

    alert(Work_hours)
    

    if (Designation == "Manager" ){
        salary = 90* Work_hours;
    
    }
    else if (Designation == "Consultant"){
        salary = 70* Work_hours;
    }  
    else if (Designation == "Trainee"){
        salary = 45* Work_hours;
    } 
   
    let Employee1 = new Employee(Name,Designation,Work_hours,salary);
   
    localStorage.setItem("itemValue",JSON.stringify(Employee1));

}
