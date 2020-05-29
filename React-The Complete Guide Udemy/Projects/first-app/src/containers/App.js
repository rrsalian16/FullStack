import React, { Component} from "react";

import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

/* Class Based Component */
class App extends Component {

  constructor(props){
    super(props);
    console.log("[App.js] constructor")
  }

  state = {
    persons: [
      { id: "adfsd12", name: "Rakshith", age: "23" },
      { id: "sdf234f", name: "Rohith", age: "24" },
      { id: "hfg234n", name: "Pratheek", age: "25" },
    ],
    showPersons: false,
    authenticated:false
  };

  static getDerivedStateFromProps(props,state){
      console.log("[App.js] getDerivedStateFromProps ",props)
      return state;
  }

  componentWillMount(){
    console.log("[App.js] componentWillMount...");
  }

  componentDidMount(){
    console.log("[App.js] componentDidMount...");
  }

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

  logInHandler=()=>{
    this.setState({authenticated:true})
  }

  render() {

    console.log("[App.js] render()")
    let persons = null;

    if (this.state.showPersons) {
      persons = 
          <Persons
            persons={this.state.persons}
            changed={this.nameChangedHandler}
            clicked={this.deletePersonHandler}
          />
    }

    return (
      <WithClass classes={classes.App}>
        < AuthContext.Provider value = {
            {authenticated: this.state.authenticated,
              login: this.logInHandler
            }
        } >
        
        <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonHandler}
        />
        {persons}
        </AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
