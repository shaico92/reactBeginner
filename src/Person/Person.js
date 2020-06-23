import React from 'react';


import  './Person.css'

import xBtn from '../xButton.png'
const Person = (props)=>{

    return(

      <div style={props.style} >
        <img onClick={props.click} className='btn' src={xBtn}></img>
    <p  >  i am {props.name} and i  am {props.age} years old</p>

    <p>{props.children}</p>
    <input type='text' onChange={props.changed} value={props.name}></input>


      </div>  




    );



}


export default Person;