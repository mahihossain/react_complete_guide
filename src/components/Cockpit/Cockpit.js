import React, { useEffect } from "react";
import styles from "./Cockpit.css";

const Cockpit = props => {
  useEffect(
    () => {
      console.log("[Cockpit.js] useEffect rendering....");

      setTimeout(() => {
        alert("Data Saved!");
      }, 1000);

      return () => {
        console.log("[Cockpit.js] cleanup in useEffect...");
      };
    },
    /* [props.persons] */ []
  );

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect rendering....");

    return () => {
      console.log("[Cockpit.js] cleanup in 2nd useEffect...");
    }
  })

  console.log("[Conckpit.js] rendering cockpit....");
  let cssClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = styles.Red;
  }
  if (props.personsLength <= 2) {
    cssClasses.push(styles.red);
  }
  if (props.personsLength <= 1) {
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

export default React.memo(Cockpit);
