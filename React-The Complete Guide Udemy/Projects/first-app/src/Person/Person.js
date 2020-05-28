import React, { Component } from "react";
import './Person.css';
import Styled from 'styled-components';


const StyledDiv = Styled.div`
            width: 60%;
            margin: 15px auto;
            border: 1px solid #3f3f3f;
            box-shadow: 0px 4px 10px #333;
            padding: 15px;
            text-align: center;

            '@media (min-width: 500px)':{
            width:'450px'
        }

        `;

/* Function Based Component */
const person = (props) => {

    /* const style={
        '@media (min-width: 500px)':{
            width:'450px'
        }
    } */

    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>My name is {props.name} & I'm {props.age} year old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
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
