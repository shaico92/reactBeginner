import React,{useState, Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';


class App extends Component  {
  

state = {
  showPersons : false,
persons: [
    {id : 'segma1',name: 'makore', age :23},
    {id : 'segma2',name: 'sha1', age :21},
    {id : 'segma3',name: 'sha2', age :24},
    {id : 'segma4',name: 'sha3', age :26}

]



}




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
  
    nameChangedHandler = (event, id)=> {
          const personIndex = this.state.persons.findIndex(p=>{
            return p.id ===id;
            
          });

          const person = {
            ...this.state.persons[personIndex]
          };

          //this is the same as lines 51-53
          //const person = Object.assign({},this.state.persons[personIndex])

          person.name = event.target.value;

          const persons = [...this.state.persons];
          persons[personIndex]=person;

          this.setState({persons: persons});

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
       key = {person.id}
       changed={(event)=>this.nameChangedHandler(event, person.id)}
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


