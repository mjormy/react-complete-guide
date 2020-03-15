import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ormycita', age: 33 },
      { name: 'Mia', age: 29 },
      { name: 'Tefy', age: 28 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name='Maya';
    this.setState( {
      persons: [
        { name: newName, age: 33 },
        { name: 'Mia', age: 25 },
        { name: 'Tefy', age: 28 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Ormycita', age: 33 },
        { name: event.target.value, age: 25 },
        { name: 'Tefy', age: 28 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('New Ormycita Button')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'New Ormycita click')}>
          My hobbies: Knitting
        </Person>
      </div>
);
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Hi, I\'m a React App!'))
  }
}

export default App;
