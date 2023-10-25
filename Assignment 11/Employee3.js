function send(){

class Employee{
    
    constructor(Name, Designation, Work_hours, joiningDate){
        this.Name =Name;
        this.Designation =Designation;
        this.Work_hours = Work_hours;
        this.joiningDate = joiningDate;

    }
    getsalary()
        {  if(this.Designation == "Manager")
        return this.Work_hours*90; 
        else if(this.Designation == "Consultant") 
        return this.Work_hours*70;
        else if(this.Designation == "Trainee")  
        return this.Work_hours*45; 
     } 
            
    
}

class Manager extends Employee{
    construtor(Name,Designation,Work_hours){
        this.Name =Name;
        this.Designation =Designation;
        this.Work_hours = Work_hours;
      //  super(Name,Work_hours,Designation);
        
    }
}

class Consultant extends Employee{
        construtor(Name,Work_hours, Designation){
            this.Name =Name;
        this.Designation =Designation;
        this.Work_hours = Work_hours;
            //super(Name,Work_hours);
           
        }
}

class Trainee extends Employee{
    construtor(Name,Work_hours,Designation){
        this.Name =Name;
        this.Designation =Designation;
        this.Work_hours = Work_hours;
       // super(Name,Work_hours);
       
    }
}

let details = {
   Name:document.getElementById("Name").value,
   Empid:document.getElementById("Empid").value,
   Work_hours:document.getElementById("hours").value,
   Designation:document.querySelector('input[type=radio]:checked').value,
      }
   
   let Employee1 = new Employee(details.Name,details.Designation,details.Work_hours)
   var Empsalary=(Employee1.getsalary());
   let Manager1 = new Manager(details.Name,details.Designation,details.Work_hours)
   var Empsalary=(Manager1.getsalary());

   let Consultant1 = new Consultant(details.Name,details.Designation,details.Work_hours)
   var Empsalary=(Consultant1.getsalary());
   let Trainee1= new Trainee(details.Name,details.Designation,details.Work_hours)
   var Empsalary=(Trainee1.getsalary());
   
   alert("send")
//
let textValue = details.Name +"    "+"who is a  "+"    "+details.Designation +"   "+ "  will get $ "+ Empsalary;
//let textValue = Empsalary;
localStorage.setItem("itemValue", textValue)

};