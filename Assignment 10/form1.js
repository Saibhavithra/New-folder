function submit(){
    let details={
        firstname:document.getElementById("FirstName").value,
        Lastname:document.getElementById("LastName").value,
        Email:document.getElementById("Email").value,
        Phone_number:document.getElementById("Mobile").value,
        Date_of_Birth:document.getElementById("dob").value,
        /*gender:document.getElementById("Gender").value,*/
        gender:document.querySelector('input[type=radio]:checked').value,
        Address:document.getElementById("addr").value,
        City:document.getElementById("city").value,
        
    }
    console.log(details);
    }