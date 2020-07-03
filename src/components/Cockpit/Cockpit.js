import React,{useEffect} from 'react'

import classes from  './Cockpit.css'

const cockpit = props=>{

  


  useEffect(()=>{
    console.log('[Cockpit.js] useEffect');
    setTimeout(()=>{
        console.log('Saved data to cloud')
    },1000);
    return ()=>{
      
      console.log('[Cockpit.js] cleanup work in useEffect' )
    }
  },[])

  useEffect(()=>{
    console.log('[Cockpit.js] useEffect 2');
    return ()=>{
      console.log('[Cockpit.js] cleanup work in second useEffect' )
    }
  })

    const assignedclasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red
    }
    
  if (props.personsLength<=2) {
    assignedclasses.push(classes.red);
    
    
  }
  if (props.personsLength<=1) {
    assignedclasses.push(classes.bold);
  }
  
    return(
    <div className={classes.Cockpit}>
        <h1>Hi im React App</h1>
        <p className={assignedclasses.join(' ')}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
      
    </div>
        
    )
}

export default React.memo(cockpit);