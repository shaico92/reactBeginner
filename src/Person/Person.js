import React from 'react';


const Person = (props)=>{

    return(

      <div style={props.style} onClick={props.click}>

    <p >  i am {props.name} and i  am {props.age} years old</p>

    <p>{props.children}</p>


      </div>  




    );



}


export default Person;