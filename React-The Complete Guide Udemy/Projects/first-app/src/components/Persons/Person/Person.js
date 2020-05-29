import React, { useEffect, useRef } from "react";
import Aux from '../../../hoc/Auxiliary'
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context'

/* Function Based Component */
const person = (props) => {

    

    console.log("[Person.js] rendering...");
    return (
        <div className={classes.Person} >

            <AuthContext.Consumer>
                {(context)=>context.authenticated ? < p > Authenticated </p> :<p>Please.. Log In</p >}
            </AuthContext.Consumer>

            <p onClick={props.click}>My name is {props.name} & I'm {props.age} year old.</p>
            <p>{props.children}</p>
            <input  type="text" onChange={props.changed} value={props.name} />
        
        </div>
    );
};

export default person;