function send(){
class Employee{
    constructor(Name, Designation, Work_hours){
        this.Name =Name;    
         this.Designation =Designation;
        this.Work_hours = Work_hours;       

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

let details = {
 Name:document.getElementById("Name").value,
Empid:document.getElementById("Empid").value,
   Work_hours:document.getElementById("hours").value,
   Designation:document.querySelector('input[type=radio]:checked').value,
   }

let Employee1 = new Employee(details.Name,details.Designation,details.Work_hours)
var Empsalary=(Employee1.getsalary());

alert("send")
let textValue = details.Name +"    "+"who is a  "+"    "+details.Designation +"   "+ "  will get $ "+ Empsalary;
//let textValue = Empsalary;
localStorage.setItem("itemValue", textValue)

};