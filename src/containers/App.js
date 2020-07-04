//import React,{useState, Component} from 'react';
//import logo from './logo.svg';

import React,{Component} from 'react';

//import Radium, {StyleRoot} from '../node_modules/radium';

import classesToUse  from './App.css'

import WithClass from '../hoc/WithClass'

import Aux from '../hoc/Auxillary'

import Persons from '../components/Persons/Persons';

import Cockpit from '../components/Cockpit/Cockpit'

import AuthContext from '../context/auth-context';
//import ErrorBounday from '../ErrorBoundry/ErrorBoundary'

class App extends Component  {   
  
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    
  }
  

state = {
  showPersons : false,
  showCockpit : true,
  changedCounte : 0,
  authenticated : false,
persons: [
    {id : 'segma1',name: 'makore', age :23},
    {id : 'segma2',name: 'sha1', age :21},
    {id : 'segma3',name: 'sha2', age :24},
    {id : 'segma4',name: 'sha3', age :26}

]



}

static getDerivedStateFromProps(props, state){
  console.log('[App.js] get derived state from props', props);
  return state;
}


// componentWillMount(){
//   console.log('[App.js] componentWillMount')
// }


componentDidMount(){
  console.log('[App.js] componentDidMount')
}

shouldComponentUpdate(nextProps,nextState){
  console.log('[App.js] should component update');
  return true;
}

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
}

deletePersonHandler = (indexP)=>{

  const persons = [...this.state.persons]
  
  persons.splice(indexP,1);
  this.setState({persons: persons});

  
  ;
 }


loginHandler=()=>{
this.setState({authenticated : true});
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

          this.setState((prevState,props)=>{
            
              return{
                persons: persons,
             changedCounte : prevState.changedCounte+1
            };
          
            });

    };
 
 
 
   
  
render()
{
console.log('[App.js] render');  
  
  
  let persons = null;
  if (this.state.showPersons) {
    persons = (

<Persons

  persons={this.state.persons}
  clicked={this.deletePersonHandler}
  changed={this.nameChangedHandler}
      isAuthenticated ={this.state.authenticated}

/>
    
    );
    
    
    
  }


  return (

    //<WithClass classes={classesToUse.App}>
    <Aux>
      <button onClick={()=>{
        this.setState({showCockpit: false})
      }}>Remove Cockpit
      </button>
         <AuthContext.Provider value={{
           authenticated : this.state.authenticated,
           login : this.loginHandler

         }}>

         s
      {this.state.showCockpit ? (
      <Cockpit 
      showPersons={this.state.showPersons}
      personsLength={this.state.persons.length}
      clicked={this.togglePersonsHandler}
      
      />
      ):null}


      {/*renders the person var*/}
      {persons}
      
      </AuthContext.Provider>
      
      
      </Aux>

      
  );
    }
}

export default WithClass(App, classesToUse.App);


