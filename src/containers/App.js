import React, { Component } from "react";
import styles from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] rendering constructor....");
    /* this.state = {
      persons: [
        { id: 1, name: "Mahi", age: 25 },
        { id: 2, name: "Max", age: 27 },
        { id: 3, name: "Maria", age: 2000 }
      ],
      showPersons: false
    }; this is old way of declaring state */
  }

  state = {
    persons: [
      { id: 1, name: "Mahi", age: 25 },
      { id: 2, name: "Max", age: 27 },
      { id: 3, name: "Maria", age: 2000 }
    ],
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] rendering getDerivedStateFromProps....");
    return state;
  }

  componentDidMount() {
    console.log("[App.js] rendering componentDidMount....");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate has rendered....");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate has rendered....");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("[App.js] rendering render....");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={styles.App}>
        <button
          onClick={() => {
            const show = this.state.showCockpit;
            this.setState({ showCockpit: !show });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            toggle={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,"Hi, I am a React Application!"));
  }
}

export default App;
