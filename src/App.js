import React,{useState, Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import Char from './Char/Char';
import Validation from './Validation/Validation';


class App extends Component  {
        
  state={

      userInput : ''

  }

  deleteChrHandler= (i) =>{
        const text = this.state.userInput.split('');
        text.splice(i,1);
        const updatedText = text.join('');
        this.setState({userInput : updatedText});
  }


  strLngth = (event)=>{
    
      this.setState({userInput : event.target.value})
    

  }
  
   style = {
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



render()
{
const charList =this.state.userInput.split('').map((chrl,i)=>{
  return <Char character ={chrl}
                  key = {i}
                  clicked={()=>this.deleteChrHandler(i)}/>
})
  
  

  
  return (
    <div className="App" style={this.style}>

      <div>
        <h1>Hi im React App</h1>
      <div>
        
      <p>{this.state.userInput}</p>
        <input type='text'
         onChange={this.strLngth}
         value={this.state.userInput}/>

          <Validation inputLngth={this.state.userInput.length}/>

        {charList}
      </div>
  
      </div>
      
        
      </div>
  );
    }
    
}

export default App;


