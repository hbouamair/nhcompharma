import React from 'react' ;    
import DoctorProfile from "../../Profiles/DoctorProfile" ; 
import HospitalProfile from "../../Profiles/HospitalProfile" ;
import ParticulProfile from "../../Profiles/ParticulProfile" ; 
import PharmaProfile from "../../Profiles/PharmaProfile" ;  




function Profilebyuser() { 


  const Verify =() => {  

    var d = JSON.parse(sessionStorage.getItem("currentuser"));  

     switch (d.typeU) {
       case "Particulier": 
           return ParticulProfile();
         break; 
       case "Pharmacie": 
           return PharmaProfile();   
         break;    
       case "Medcin":   
          return   DoctorProfile();
         break;     
       case "Clinique": 
          return   HospitalProfile();   
         break;   
       default: 
         return window.location.href="/" 
         break;
     }
    

  }

    return (
        <div>
             <Verify />
        </div>
    )
}

export default Profilebyuser ;
