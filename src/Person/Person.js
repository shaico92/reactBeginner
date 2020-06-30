import React from 'react';
//import Radium  from 'radium';

import personStyles from './Person.css'

//import Styled from 'styled-components'; 

import xBtn from '../xButton.png'
/*
import styled from 'styled-components';
const StyledDiv = Styled.div`

background-color : white;
font: inherit;
box-shadow: 0 1px 2px;
border: 1px solid blue;
padding:  8px;
margin-left: 25%;
margin-top: 5%;
width: 60%;
cursor: pointer;

@media (min-width: 500px){
  width: 50%
}




`;
*/
const Person = (props)=>{

  const styale = {
 
    '@media (min-width: 500px)':{
      width : '50%',
      
    }
    
     
      
    
  }


  
    return(


      //<div className='Person' style={style} >
      <div className={personStyles.Person}>
        <img onClick={props.click} className={personStyles.btn} src={xBtn}></img>
    <p  >  i am {props.name} and i  am {props.age} years old</p>

    <p>{props.children}</p>
    <input type='text' onChange={props.changed} value={props.name}></input>


      


      </div>

    );



}


export default Person;