import React, { useEffect } from 'react';
import classes from './Cockpit.css'



const cockpit = (props) => {
  useEffect(() => {
    // componentDidMount + componentDidUpdate
    console.log('[Cockpit.js] useEffect');
    // Http request
    setTimeout(() => {
      alert('Saved data');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] Cleanup work useeffect');
    }
  }, []); // empty if only executes for componentDidMount
  // props if dependant on a field

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] Cleanup work 2nd useeffect')
    }
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Toggle Persons</button>
    </div>
  );
};

export default React.memo(cockpit);