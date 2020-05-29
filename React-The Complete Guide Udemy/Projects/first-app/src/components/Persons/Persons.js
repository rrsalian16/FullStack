import React from "react";
import Person from "./Person/Person";

const persons = (props) => {
  console.log("[Persons.js] rendering...");

  return props.persons.map((person, index) => {
    return (
      <Person
        changed={(event) => props.changed(event, person.id)}
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
      />
    );
  });
};

export default persons;
