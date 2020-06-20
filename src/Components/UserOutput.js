import React from 'react';

//how to link css or js with the component


const UserOutput = (props)=>{

    return(

      <div>
        <p >my name is {props.username} {props.children}</p>
        <p>{props.children}</p>

      </div>  




    );



}


export default UserOutput;