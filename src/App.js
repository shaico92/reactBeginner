import React,{useState} from 'react';
//import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';


const App = props=>  {
  const lol = {
    border : '1px solid red',
    padding : '8px',
    cursor: 'pointer'   
     }
  const [ personsProps, setPersonsState ] = useState({
    changed : false,
  persons: [
      {name: 'makore', age :23},
      {name: 'sha1', age :21},
      {name: 'sha2', age :24},
      {name: 'sha3', age :26}

  ]



  });

const nameChangedHandler = (event)=>{
      setPersonsState({
        changed : false,
        persons: [
            {name: 'makore', age :23},
            {name: event.target.value, age :21},
            {name: 'sha2', age :24},
            {name: 'sha3', age :26}
      
        ]     
      })     
}



const switchnNmeHandler = (newName)=>{
      if (personsProps.changed===false) {
        setPersonsState({
          
          changed : true,
          persons: [
          {name: newName, age :923},
          {name: 'Newsha1', age :218},
          {name: 'Newsha2', age :244},
          {name: 'Newsha3', age :261}
        
        ]


        })
      } else {
        setPersonsState({

          changed : false,
          persons: [
              {name: newName, age :23},
              {name: 'sha1', age :21},
              {name: 'sha2', age :24},
              {name: 'sha3', age :26}
        
          ]






          //
          }) 
      }
  
  // dont do this!!!! this.state.persons[0].name= 'newName';
       
    
 
    }
  
 
 
 
 
   
 


  return (
    <div className="App">
      <button style={lol} 
       onClick={switchnNmeHandler.bind(this,'switcharoo')}>Switch Name</button>
<Person 
name= {personsProps.persons[0].name} 
age ={personsProps.persons[0].age}
click = {switchnNmeHandler.bind(this, 'stamShem')}/>
<Person 
name= {personsProps.persons[1].name} 
age ={personsProps.persons[1].age}
click = {switchnNmeHandler.bind(this, 'stamShemss')}
changed ={nameChangedHandler}/>
<Person


name= {personsProps.persons[2].name} 
age ={personsProps.persons[2].age}
/>
<Person 
name= {personsProps.persons[3].name} 
age ={personsProps.persons[3].age}
>this is just a random content</Person>

      </div>
  );

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