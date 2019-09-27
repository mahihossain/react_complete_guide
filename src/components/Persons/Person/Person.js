import React from "react";
import styles from "./Person.css";

const person = props => {
  console.log("[Person.js] rendering person....");
  return (
    <div className={styles.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
