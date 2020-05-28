import React from "react";
import classes from './Person.module.css';


/* Function Based Component */
const person = (props) => {

    return (
        <div className={classes.Person} >
            <p onClick={props.click}>My name is {props.name} & I'm {props.age} year old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;