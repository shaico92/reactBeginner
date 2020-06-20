import React,{useState} from 'react';


import UserInput from './Components/UserInput';

import UserOutput from './Components/UserOutput';


const Assignment = props=>{

    const style1 = {
        border : '10px solid purple',
    padding : '8px',
    cursor: 'pointer'
        
        

    }

    const [ users, setUsersState ] = useState({

        usersG :[
            {username : 'jogn112'},
            {username : 'jogn41'},
            {username : 'jogn12'},
            {username : 'jogn2'},
            {username : 'jogn3'},
            {username : 'jogn545'}
        ]

        

    });



const change = ()=>{
    setUsersState({
        usersG :[
            {username : '1'},
            {username : '2'},
            {username : '3'},
            {username : '4'},
            {username : '5'},
            {username : '6'}
        ]
    })
}

const setName = (event)=>{
    setUsersState({
        usersG :[
            {username : event.target.value},
            {username : event.target.value},
            {username : event.target.value},
            {username : event.target.value},
            {username : event.target.value},
            {username : event.target.value}
        ]
    })
}


    return(
            <div>
                


                <UserOutput changed={setName} username={users.usersG[0].username}>
                    this is cool
                </UserOutput>
                <UserInput  changed={setName}
                            current= {users.usersG[0].username} >

                </UserInput>
                <UserOutput changed={setName} username={users.usersG[1].username}>
                    this is cool
                </UserOutput>
                <UserInput style={style1} changed={setName}
                           current= {users.usersG[1].username} 
                           >

                </UserInput>
                <UserOutput  changed={setName} username={users.usersG[2].username}>
                    this is cool
                </UserOutput>
                <UserInput changed={setName}
                            current= {users.usersG[2].username}>

                </UserInput>
                <UserOutput  username={users.usersG[3].username}>
                    this is cool
                </UserOutput>
                <UserInput changed={setName}
                            current= {users.usersG[3].username}>

                </UserInput>
                
                <button onClick={change}>change</button>
            </div>

    )





}


export default Assignment;