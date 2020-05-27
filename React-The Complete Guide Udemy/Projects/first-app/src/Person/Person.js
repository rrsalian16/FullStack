import React, { Component } from "react";
import './Person.css';

/* Function Based Component */
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>
                My name is {props.name} & I'm {props.age} year old.{" "}
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};
export default person;

/* Class Based Component */

/* class Person extends Component{
    render(){
        return (<div>
      <p>
        My name is {props.name} & I'm {props.age} year old.{" "}
      </p>
      <p>{props.children}</p>
    </div>;
    }
}
export default Person; */
