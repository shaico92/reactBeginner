import React,{Component} from 'react';
//import Radium  from 'radium';

import personStyles from './Person.css'

//import Styled from 'styled-components'; 

import PropTypes from 'prop-types'

//import WithClass from '../../../hoc/WithClass'

import Aux from '../../../hoc/Auxillary'

import AuthContext from '../../../context/auth-context'
import xBtn from '../../../assets/xButton.png'
import withClass from '../../../hoc/WithClass';
//import Persons from '../Persons';
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

  constructor(props){
    super(props)
    this.inputElemeRef= React.createRef();
  }



static contextType= AuthContext;



  componentDidMount(){
    this.inputElemeRef.current.focus();
    console.log(this.context.authenticated);
  }
render(){
  console.log('[Person.js] rendering');
  return(


      


     <Aux >
       <AuthContext.Consumer>

       {context =>context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>}
       </AuthContext.Consumer>
       
      <img 
      onClick={this.props.click} 
      alt={''} 
      className={personStyles.btn} 
      src={xBtn}>

      </img>
  <p  >  i am {this.props.name} and i  am {this.props.age} years old</p>

  <p>
    {this.props.children}
    </p>
  <input 
  //ref={(inputEl)=>{this.inputEleme= inputEl}}
  ref={this.inputElemeRef}
  type='text' 
  onChange={this.props.changed} 
  value={this.props.name}></input>


    
    </Aux>



  );
}

  
    



}

Person.propTypes= {

    click: PropTypes.func,
    name: PropTypes.string,
    age : PropTypes.number,
    changed : PropTypes.func


};

export default withClass(Person, personStyles.Person);