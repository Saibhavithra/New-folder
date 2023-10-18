
let Counter = 0;
function Validate(){    
     
    let Number = document.getElementById("num1").value;
    let INPUTNUMBER = Number;
    
    if(Counter<5)
    {
    if (INPUTNUMBER == 7)
    {
      Counter++;
      document.getElementById("div1").innerHTML = INPUTNUMBER; 
      document.getElementById("div2").innerHTML = Counter;
      alert("Congragulations");
     }
    else
     { Counter++;
        alert("try again");
        document.getElementById("div2").innerHTML = Counter;
      }
  
      
    }
    else{
      alert("Attempt over");
    }
  }


     
      


