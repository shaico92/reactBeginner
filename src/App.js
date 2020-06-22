import React,{useState, Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';


class App extends Component  {
  /*
  const [ personsProps, setPersonsState ] = useState({
    showPersons : false,
  persons: [
      {name: 'makore', age :23},
      {name: 'sha1', age :21},
      {name: 'sha2', age :24},
      {name: 'sha3', age :26}

  ]



  });
*/

state = {
  showPersons : false,
persons: [
    {name: 'makore', age :23},
    {name: 'sha1', age :21},
    {name: 'sha2', age :24},
    {name: 'sha3', age :26}

]



}



/*
 switchnNmeHandler = ()=>{
      if (personsProps.changed===false) {
        setPersonsState({
          
          changed : true,
          persons: [
          {name: 'Newmakore', age :923},
          {name: 'Newsha1', age :218},
          {name: 'Newsha2', age :244},
          {name: 'Newsha3', age :261}
        
        ]


        })
      } else {
        setPersonsState({

          changed : false,
          persons: [
              {name: 'makore', age :23},
              {name: 'sha1', age :21},
              {name: 'sha2', age :24},
              {name: 'sha3', age :26}
        
          ]






          //
          }) 
      }
  
  // dont do this!!!! this.state.persons[0].name= 'newName';
       
    
 
    }
*/


deletePersonHandler = (indexP)=>{

  const persons = [...this.state.persons]
  
  persons.splice(indexP,1);
  this.setState({persons: persons});

  
  ;
 }
  togglePersonsHandler = ()=>{
     
      
      const doesShow = this.state.showPersons;
         this.setState({showPersons : !doesShow})
    }
  
 
 
 
 
   
 
render()
{
  const style = {
    backgroundColor : 'white',
    font: 'inherit',
    
    boxShadow: '0 1px 2px', 
    border : '1px solid blue',
    padding : '8px',
    marginLeft : '25%',
    marginTop : '5%',
    width : '50%',
    cursor: 'pointer'
  }
  let persons = null;
  if (this.state.showPersons) {
    persons = (
<div>
  {this.state.persons.map((person,index)=>{
    return <Person style={style}
    click={()=>this.deletePersonHandler(index)}
      name= {person.name}
       age ={person.age}
       />
  })}

      </div> 
    );
    
  }
  return (
    <div className="App">

      <div>
        <h1>Hi im React App</h1>
      <button onClick={this.togglePersonsHandler}>show all</button>
      {/*renders the person var*/}
      {persons}
      </div>
      
        
      </div>
  );
    }
}

export default App;



  /*
state = {
  changed : false,
  persons: [
      {name: 'makore', age :23},
      {name: 'sha1', age :21},
      {name: 'sha2', age :24},
      {name: 'sha3', age :26}

  ]


}



switchnNmeHandler = ()=>{
  
  
 // dont do this!!!! this.state.persons[0].name= 'newName';
  if (this.state.changed===false) {
    this.setState({
      changed : true,
      persons: [
      {name: 'Newmakore', age :23},
      {name: 'Newsha1', age :21},
      {name: 'Newsha2', age :24},
      {name: 'Newsha3', age :26}
    
    ]})   
  } else {
    this.setState({
      changed : false,
      
      persons: [
      {name: 'makore', age :23},
      {name: 'sha1', age :21},
      {name: 'sha2', age :24},
      {name: 'sha3', age :26}

  ] })}
 




  
}
*/