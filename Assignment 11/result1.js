
//let {Name1,Designation1,sal1} = JSON.parse(localStorage.getItem("itemValue"));


//document.getElementById("div1").innerHTML = `${Name1}+"who is a"+${Designation1} + "will get $" +${sal1}`

let output =localStorage.getItem(("itemValue"));
let result1=JSON.parse(output);
document.getElementById("div1").innerHTML = result1.Name + " who is a "+ result1.Designation + "will get $"+ result1.salary;

//let result =localStorage.getItem(("itemValue"));
//let result1=JSON.parse(result);
//document.getElementById("div1").innerHTML = result1.Name + " who is a "+ result1.Designation + "will get $"+ result1.salary;