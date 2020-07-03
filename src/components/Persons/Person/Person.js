import React,{Component} from 'react';
//import Radium  from 'radium';

import personStyles from './Person.css'

//import Styled from 'styled-components'; 


import Aux from '../../../hoc/Auxillary'

import xBtn from '../../../assets/xButton.png'
/*
import styled from 'styled-components';
const StyledDiv = Styled.div`

background-color : white;
font: inherit;
box-shadow: 0 1px 2px;
border: 1px solid blue;
padding:  8px;
margin-left: 25%;s
margin-top: 5%;
width: 60%;
cursor: pointer;

@media (min-width: 500px){
  width: 50%
}




`;
*/
class Person extends Component{
render(){
  console.log('[Person.js] rendering');
  return(

      
    //<div className='Person' style={style} >
    // <Aux>
      
    // </Aux>
    <div className={personStyles.Person}>
      <img onClick={this.props.click} alt={''} className={personStyles.btn} src={xBtn}></img>
  <p  >  i am {this.props.name} and i  am {this.props.age} years old</p>

  <p>{this.props.children}</p>
  <input type='text' onChange={this.props.changed} value={this.props.name}></input>


    


    </div>

  );
}

  
    



}


export default Person;