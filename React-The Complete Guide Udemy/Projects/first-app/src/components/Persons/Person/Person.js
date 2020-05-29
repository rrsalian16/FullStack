import React from "react";
import Aux from '../../../hoc/Auxiliary'
import classes from './Person.module.css';


/* Function Based Component */
const person = (props) => {
    console.log("[Person.js] rendering...");
    return (
        //<div className={classes.Person} >
        < React.Fragment >
            <p onClick={props.click}>My name is {props.name} & I'm {props.age} year old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </React.Fragment>
        // </div>
    );
};

export default person;