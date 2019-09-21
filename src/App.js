import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Mahi", age: 25 },
      { id: 2, name: "Max", age: 27 },
      { id: 3, name: "Maria", age: 2000 }
    ],
    showPersons: false
  };

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
    const style = {
      backgroundColor: "green",
      color: "white",
      padding: "8px",
      font: "inherit",
      border: "1px solid blue",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "balck"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <StyleRoot>
          <div>
            {this.state.persons.map((person, index) => {
              return (
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              );
            })}
          </div>
        </StyleRoot>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    let cssClasses = [];
    if (this.state.persons.length <= 2) {
      cssClasses.push("red");
    }
    if (this.state.persons.length <= 1) {
      cssClasses.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p className={cssClasses.join(" ")}>This is a paragraph from App.js</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,"Hi, I am a React Application!"));
  }
}

export default Radium(App);
