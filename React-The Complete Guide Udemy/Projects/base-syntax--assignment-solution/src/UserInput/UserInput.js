import React from 'react';


const UserInput=(props)=>{

    let style={
        display:'block',
        padding:'30px',
        margin:'auto',
        fontSize:'20px',
        textAlign:'center'
    }

    return(
        
        <input style={style} type="text" onChange={props.changed} value={props.name}/>
    );
}

export default UserInput;