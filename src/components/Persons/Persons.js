import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  /* static getDerivedStateFromProps(props, state){
    console.log('[Persons.js] getDerivedStateFromProps has rendered....');
    return state;
  } */

  shouldComponentUpdate(nextProps, nextstState) {
    console.log("[Persons.js] shouldComponentUpdate has rendered....");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate has rendered....");
    return null;
  }

  componentDidUpdate() {
    console.log("[Persons.js] componentDidUpdate has rendered....");
  }

  render() {
    console.log("[Persons.js] rendering persons....");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
