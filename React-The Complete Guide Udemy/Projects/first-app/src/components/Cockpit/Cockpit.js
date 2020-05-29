import React from "react";
import classes from "./Cockpit.module.css";
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
  let buttonClass = "";
  let assignedClasses = [];

  if (props.showPersons) {
    buttonClass = classes.Aqua;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working !!!</p>
      <button className={buttonClass} onClick={props.clicked}>
        Toggle Person
      </button>
      <AuthContext>
            {context=><button onClick={context.login}>LogIn</button>}
      </AuthContext>
      
    </div>
  );
};

export default cockpit;
