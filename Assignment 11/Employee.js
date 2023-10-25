function send(){    

let details = {
    Name:document.getElementById("Name").value,
    Empid:document.getElementById("Empid").value,
    Worked_Hours:document.getElementById("hours").value,
    Designation:document.querySelector('input[type=radio]:checked').value,
    }

 if(details.Designation == "Manager"){
        var  salary = details.Worked_Hours*90;}
        else if(Designation == "Consultant") {
         var  salary = details.Worked_Hours*70;}
        else if(Designation == "Trainee"){
        var  salary = details.Worked_Hours*45;}
   alert("send")
   let textValue = details.Name +"    "+"who is a  "+"    "+details.Designation +"   "+ "  will get $ "+ salary;
   localStorage.setItem("itemValue", textValue)
   };
