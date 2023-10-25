/*var user = JSON.stringify({ 
    Name : $("#Name").val(), 
     Designation: $("#Designation").val(), 
    salary : $("#salary").val(), 
       }),
   users = localStorage.getItem('user');

users = users ? JSON.parse(users) : [];

users.push(user);

localStorage.setItem("user", JSON.stringify(users));*/ 



let result = localStorage.getItem("itemValue")
document.getElementById("div1").innerHTML = result