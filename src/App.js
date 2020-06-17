import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';


class App extends Component  {

  
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

render(){
  return (
    <div className="App">
      <button onClick={this.switchnNmeHandler}>Switch Name</button>
<Person name= {this.state.persons[0].name} age ={this.state.persons[0].age}/>
<Person name= {this.state.persons[1].name} age ={this.state.persons[1].age}/>
<Person name= {this.state.persons[2].name} age ={this.state.persons[2].age}/>
<Person name= {this.state.persons[3].name} age ={this.state.persons[3].age}>this is just a random content</Person>

      </div>
  );
  }
}

export default App;
