
import React from 'react'






const Validation =props=>{

  const reqSize = 7;
  let validatioMsg = 'Text Long enough!'

  if (props.inputLngth<reqSize) {
    
    validatioMsg = 'Text is too short!'
  } else{
    
  }


  return(

    <div>

        <p>{validatioMsg}</p>
        
    </div>


  )
}


export default Validation;