import React from "react";
import styles from "./Cockpit.css";

const cockpit = props => {
  console.log("[Conckpit.js] rendering cockpit....");
  let cssClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = styles.Red;
  }
  if (props.persons.length <= 2) {
    cssClasses.push(styles.red);
  }
  if (props.persons.length <= 1) {
    cssClasses.push(styles.bold);
  }
  return (
    <div className={styles.Cockpit}>
      <h1>Hi, I am a React App!</h1>
      <p className={cssClasses.join(" ")}>This is a paragraph from App.js</p>
      <button className={btnClass} onClick={props.toggle}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
