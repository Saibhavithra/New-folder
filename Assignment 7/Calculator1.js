
             
        
        function addition(){
            let FirstNumber = document.getElementById("num1").value;
            let SecondNumber = document.getElementById("num2").value;
            let ThirdNumber = document.getElementById("num3").value;
            let fourthNumber = document.getElementById("num4").value;        
            let fifthNumber = document.getElementById("num5").value;          
            
        let ADD = parseInt(FirstNumber) + parseInt(SecondNumber)+ parseInt(ThirdNumber) + parseInt(fourthNumber) +parseInt(fifthNumber); 
        document.getElementById("div1").innerHTML = ADD; 
            
        }

        function sub(){
            let FirstNumber = document.getElementById("num1").value;
            let SecondNumber = document.getElementById("num2").value;
            let ThirdNumber = document.getElementById("num3").value;
            let fourthNumber = document.getElementById("num4").value;        
            let fifthNumber = document.getElementById("num5").value;          
            let SUB = parseInt(FirstNumber) - parseInt(SecondNumber)- parseInt(ThirdNumber) - parseInt(fourthNumber) -parseInt(fifthNumber);    
       
        document.getElementById("div1").innerHTML = SUB; 
            
        }

        function Multiply(){
            let FirstNumber = document.getElementById("num1").value;
            let SecondNumber = document.getElementById("num2").value;
            let ThirdNumber = document.getElementById("num3").value;
            let fourthNumber = document.getElementById("num4").value;        
            let fifthNumber = document.getElementById("num5").value;          
            
        let PRODUCT = parseInt(FirstNumber) * parseInt(SecondNumber)*parseInt(ThirdNumber) * parseInt(fourthNumber) *parseInt(fifthNumber);  
        document.getElementById("div1").innerHTML = PRODUCT; 
            
        }
        
        
        function Divide(){
            let FirstNumber = document.getElementById("num1").value;
            let SecondNumber = document.getElementById("num2").value;
            let ThirdNumber = document.getElementById("num3").value;
            let fourthNumber = document.getElementById("num4").value;        
            let fifthNumber = document.getElementById("num5").value;             
            let QUOTIENT = parseInt(FirstNumber)/ parseInt(SecondNumber)/parseInt(ThirdNumber) / parseInt(fourthNumber) /parseInt(fifthNumber);  
            document.getElementById("div1").innerHTML = QUOTIENT;
       
        }
        
       
       
       
        
      