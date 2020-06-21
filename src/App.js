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
  togglePersonsHandler = ()=>{
     
      console.log('kodkads');
      const doesShow = this.state.showPersons;
         this.setState({showPersons : !doesShow})
    }
  
 
 
 
 
   
 
render()
{
  return (
    <div className="App">
      <button onClick={this.togglePersonsHandler}>show all</button>

      {/*checks if show is true else show null*/}
      { this.state.showPersons ?
        
      
      <div>
<Person  name= {this.state.persons[0].name} age ={this.state.persons[0].age}/>
<Person name= {this.state.persons[1].name} age ={this.state.persons[1].age}/>
<Person name= {this.state.persons[2].name} age ={this.state.persons[2].age}/>
<Person name= {this.state.persons[3].name} age ={this.state.persons[3].age}>this is just a random content</Person>
      </div> : null
      }
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