    
    function change(){

        
        let FirstNumber = document.getElementById("num1").value;
        let SecondNumber = document.getElementById("num2").value;
        let ThirdNumber = document.getElementById("num3").value;
        let fourthNumber = document.getElementById("num4").value;        
        let fifthNumber = document.getElementById("num5").value;    
        let ADD = parseInt(FirstNumber) + parseInt(SecondNumber)+ parseInt(ThirdNumber) + parseInt(fourthNumber) +parseInt(fifthNumber); 
        let SUB = parseInt(FirstNumber) - parseInt(SecondNumber)- parseInt(ThirdNumber) - parseInt(fourthNumber) -parseInt(fifthNumber);
        let PRODUCT = parseInt(FirstNumber) * parseInt(SecondNumber)*parseInt(ThirdNumber) * parseInt(fourthNumber) *parseInt(fifthNumber);  
        let QUOTIENT = parseInt(FirstNumber)/ parseInt(SecondNumber)/parseInt(ThirdNumber) / parseInt(fourthNumber) /parseInt(fifthNumber);  
       
       
        document.getElementById("div1").innerHTML = ADD; 
        document.getElementById("div2").innerHTML = SUB;
        document.getElementById("div3").innerHTML = PRODUCT;
        document.getElementById("div4").innerHTML = QUOTIENT;
       

        
        
    }