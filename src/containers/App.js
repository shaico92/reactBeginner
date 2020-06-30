import React,{useState, Component} from 'react';
//import logo from './logo.svg';



//import Radium, {StyleRoot} from '../node_modules/radium';

import classesToUse  from './App.css'



import Persons from '../components/Persons/Persons';

import Cockpit from '../components/Cockpit/Cockpit'

import ErrorBounday from '../ErrorBoundry/ErrorBoundary'

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
  
  
  
  let persons = null;
  if (this.state.showPersons) {
    persons = (

<Persons

  persons={this.state.persons}
  clicked={this.deletePersonHandler}
  changed={this.nameChangedHandler}


/>
    
    );
    
    
    
  }


  return (

    <div className={classesToUse.App}>

      
      <Cockpit 
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.togglePersonsHandler}/>
      {/*renders the person var*/}
      {persons}
      
      
      
      
      </div>

      
  );
    }
}

export default App;


