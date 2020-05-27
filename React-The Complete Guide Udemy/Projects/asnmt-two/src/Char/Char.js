import React from 'react';

const char=(props)=>{

    const style={
        display:'inline-block',
        padding:'16px',
        margin:'16px',
        border:'1px solid black',
        textAlign:'center'
    }
    return(
        <div onClick={props.deleteHandler} style={style}> 
            {props.character} 
        </div>
    );
}

export default char;