import React, { Component } from "react";
import './Person.css';
import Radium from 'radium';

/* Function Based Component */
const person = (props) => {

    const style={
        '@media (min-width: 500px)':{
            width:'450px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>My name is {props.name} & I'm {props.age} year old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};
export default Radium(person);

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
