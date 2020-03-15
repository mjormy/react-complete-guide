import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Ormycita', age: 33 },
      { name: 'Mia', age: 29 },
      { name: 'Tefy', age: 28 }
    ],
    otherState: 'other value'
  });

  const [otherState, setOtherState] = useState({otherState: 'other value'});

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked');
    // DON'T DO THIS: personsState.persons[0].name='Maya';
    setPersonsState({
      persons: [
        { name: 'New Ormycita', age: 33 },
        { name: 'Mia', age: 25 },
        { name: 'Tefy', age: 28 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>
        My hobbies: Knitting
        </Person>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Hi, I\'m a React App!'))
}

export default app;



