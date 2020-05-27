import React from 'react';

const validation=(props)=>{

    let msg="Text is short";
    if(props.txtLn>5){
        msg="Text is long enough"
    }

    return(
        <div>
            {msg}
        </div>
    );
}

export default validation;