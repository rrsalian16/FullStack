import React, { useEffect, useRef, useContext } from "react";
import Aux from '../../../hoc/Auxiliary'
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context'

/* Function Based Component */
const Person = (props) => {

    const authContext=useContext(AuthContext);

    console.log("[Person.js] rendering...");
    return (
        <div className={classes.Person} >

            {authContext.authenticated ? < p > Authenticated </p> :<p>Please.. Log In</p >}

            <p onClick={props.click}>My name is {props.name} & I'm {props.age} year old.</p>
            <p>{props.children}</p>
            <input  type="text" onChange={props.changed} value={props.name} />
        
        </div>
    );
};

export default Person;