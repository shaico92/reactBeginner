import React from 'react';

//how to link css or js with the component
 import './UserInput.css'

const UserInput = (props)=>{

    return(

      <div>
        <input className='lol' type= 'text' onChange={props.changed} value={props.current}/>

      </div>  




    );



}


export default UserInput;