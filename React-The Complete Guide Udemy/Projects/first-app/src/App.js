import React, { Component , useState} from 'react';
import './App.css';
import Person from './Person/Person';

/* Class Based Component */
class App extends Component {

  state={
    persons:[ 
      {name:"Rakshith",age:"23"},
      {name:"Rohith", age:"24"},
      {name:"Pratheek", age:"25"}
     ]
  }
  switchNameHandler=(newName)=>{
    // console.log("clicked");
    //DONT DO THIS ::  this.state.persons[0].name="Rakshith R Salian"; 
    this.setState({
      persons: [
        { name: newName, age: "23" },
        { name: "Rohith", age: "24" },
        { name: "Pratheek", age: "25" }
      ]
    })
  }

  nameChangedHandler=(event)=>{
    this.setState({
      persons: [
        { name: "@rrsalian16", age: "23" },
        { name: event.target.value, age: "24" },
        { name: "Pratheek", age: "25" }
      ]
    })
  }

  render() {
    
    // InlineStle :
    const style={
      BackgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working !!!</p>
        <button 
        style={style}
        onClick={()=>this.switchNameHandler("RRSalian")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>

        <Person 
        changed={this.nameChangedHandler}
        click={this.switchNameHandler.bind(this, "Rakshith R Salian")} 
        name={this.state.persons[1].name} age={this.state.persons[1].age} >
        My Hobbies:Racing
        </Person>

        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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
