import React, { Component, useState } from "react";
import classes from "./App.module.css";
import Person from "./Person/Person";


/* Class Based Component */
class App extends Component {
  state = {
    persons: [
      { id: "adfsd12", name: "Rakshith", age: "23" },
      { id: "sdf234f", name: "Rohith", age: "24" },
      { id: "hfg234n", name: "Pratheek", age: "25" },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShowPerson = this.state.showPersons;
    this.setState({
      showPersons: !doesShowPerson,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons=this.state.persons.slice()
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
   
    let persons = null;
    let buttonClass="";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                changed={(event) => this.nameChangedHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
      buttonClass=classes.Aqua;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working !!!</p>
        <button className={buttonClass} onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

