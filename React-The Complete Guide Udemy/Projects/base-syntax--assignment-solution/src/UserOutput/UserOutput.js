import React from 'react';

const UserOutput=(props)=>{

   let inlineStyle={
        withd:'50%',
        margin:'auto',
        backgroundColor:'blue',
        color:'#ffff',
        border:'2px solid #000',
        boxShadow:'0 2px 3px #000',
        padding:'20px',
        margin:'30px',
        textAlign:'center'
    }

    return (

        <h1 style={inlineStyle}>My Name is {props.name} .</h1>
    );

}

export default UserOutput;