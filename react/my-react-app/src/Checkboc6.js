
import React, { useState } from "react";
function Checkboc6() {
    const [userinfo, setUserInfo] = useState({
        Hobbies: []}); 
    const handleChange = (e) => {       
        const { value, checked } = e.target;
        const { Hobbies } = userinfo;
        // console.log(`${value} is ${checked}`);
        // Case 1 : The user checks the box
        if (checked) {
            setUserInfo({
                Hobbies: [...Hobbies, value],             
            });
        }
        // Case 2  : The user unchecks the box
        else {
            setUserInfo({
                Hobbies: Hobbies.filter(
                    (e) => e !== value
                ),
             
            });
        }
    };
    return (
        <>
<h3>Choose your Hobbies</h3>
<input type="checkbox" value="Sports"  onChange={handleChange } />
<label>Sports</label>                                    
<input type="checkbox" value="Travel"   onChange={handleChange } />
<label>Travel</label>  
<input type="checkbox" value="Music"  onChange={handleChange } />
<label>Music</label>  
<input type="checkbox" value="Reading" onChange={handleChange } />
<label>Reading</label>                                          
<div ><br></br><br></br> 
<label> Hobbies :</label>
<textarea  value={userinfo.Hobbies}  style={{ height: "30px", width:"200px" }}  ></textarea>                                                                                      
</div>                                                                                                           
</>
    );
} 
export default Checkboc6;                            
