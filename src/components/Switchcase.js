import React, { useState } from 'react'
import { Button } from 'primereact/button';                             
import { Dialog } from 'primereact/dialog';

function Switchcase() {
  
  const [visible, setVisible] = useState(false);
   
  return (
    <div classNameName='switch'>

       <form>
        <label>Select State</label>
        <select onChange={(eo)=>{
          console.log(eo.target.value)
          let selectedState=eo.target.value;
          if(selectedState=="Andhra pradesh")
          {
            console.log("Amaravathi")
          }
          else if(selectedState=="Telangana")
          {
            console.log("Hyderabad")
          }
          else if(selectedState=="Tamilnadu")
            {
              console.log("Chennai")
            }
            else if(selectedState=="Kerala")
              {
                console.log("Tiruvananthapuram")
              }
              else if(selectedState=="Karnataka")
                {
                  console.log("Bangalore")
                } else if(selectedState=="Maharashtra")
                  {
                    console.log("Mumbai")
                  }
                  else if(selectedState=="Gujarat")
                    {
                      console.log("Gandhinagar")
                    }
                    else if(selectedState=="Rajastan")
                      {
                        console.log("Jaipur")
                      }
                      else if(selectedState=="Madhya Pradesh")
                        {
                          console.log("Bhopal")
                        }
                     else{
                      console.log(`None of the Above`)
                     } 
                     
              switch (selectedState) {
                case "Andhra Pradesh":
                  console.log("Amaravathi")
                  break;

                  case "Telangana":
                  console.log("Hyderabad")
                  break;

                  case "Tamilnadu":
                  console.log("Chennai")
                  break;
                  case "Kerala":
                  console.log("Tituvananthapuram")
                  break;
                  case "Karnataka":
                  console.log("Banglore")
                  break;
                  case "Maharashtra":
                  console.log("Mumbai")
                  break;
                  case "Gujarat":
                  console.log("Gandhinagar")
                  break;
                  case "Rajastan":
                  console.log("Jaipur")
                  break;

                  case "Madhya Pradesh":
                  console.log("Bhopal")
                  break;


              
                default:
                  break;
              }       


            }}>
          <option>Andhra Pradesh</option>
          <option>Telangana</option>
          <option>Tamilnadu</option>
          <option>Kerala</option>
          <option>Karnataka</option>
          <option>Maharashtra</option>
          <option>Gujarat</option>
          <option>Rajastan</option>
          <option>Madhya Pradesh</option>
        </select>
       </form>


         

<hr></hr>



    </div>
  )
}

export default Switchcase






