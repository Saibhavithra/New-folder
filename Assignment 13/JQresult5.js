let output=localStorage.getItem("itemValue");
let result1=JSON.parse(output);
$(document).ready(function(){
        $("#div1").html( result1.Name+" who is a "+result1.Designation+ "will get $"+result1.salary)
    })



