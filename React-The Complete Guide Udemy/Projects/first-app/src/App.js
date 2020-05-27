import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

/* Class Based Component */
class App extends Component {

  state = {
    persons: [
      { id:'adfsd12', name: "Rakshith", age: "23" },
      { id:'sdf234f', name: "Rohith", age: "24" },
      { id:'hfg234n', name: "Pratheek", age: "25" }
    ],
    showPersons: false
  }

  nameChangedHandler = (event,id) => {

    const personIndex=this.state.persons.findIndex(p=>{ return p.id==id; })
    const person={...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons: persons })
  }

  togglePersonHandler = () => {
    const doesShowPerson = this.state.showPersons;
    this.setState({
      showPersons: !doesShowPerson
    })
  }

  deletePersonHandler=(personIndex)=>{
    // const persons=this.state.persons.slice()
    const persons=[...this.state.persons];  
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  render() {

    // InlineStle :
    const style = {
      BackgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              changed={(event)=>this.nameChangedHandler(event,person.id)}
              click={()=>this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              />
          
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working !!!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
    );

    // Above return is conver to below return internally
    // return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'Hi, I\'m a React App'));
  }
}

export default App;

/* Function Based Component -Functional Component */
/* const app = props => {

  const[personsState, setPersonsState]= useState({
    persons: [
      { name: "Rakshith", age: "23" },
      { name: "Rohith", age: "24" },
      { name: "Pratheek", age: "25" }
    ]
  });

   let switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Rakshith R Salian", age: "23" },
        { name: "Rohith", age: "24" },
        { name: "Pratheek", age: "25" }
      ]
    });
  };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working !!!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies:Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
}

export default app; */
