import React from 'react';

//how to link css or js with the component
import './Person.css';

const Person = (props)=>{

    return(

      <div className='Person'>

    <p onClick ={props.click}> i am {props.name} and i am {props.age} years old</p>

    <p>{props.children}</p>
        <input type= 'text' onChange={props.changed} value={props.name}/>

      </div>  




    );



}


export default Person;