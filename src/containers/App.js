import React, { Component } from 'react';

import appCssClasses from './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Alesandro', age: 24 },
      { id: 'vasdf1', name: 'Daniel', age: 28 },
      { id: 'asdf11', name: 'Savino', age: 20 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const personCopy = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    personCopy.name = event.target.value;

    const personsArrCopy = [...this.state.persons];
    personsArrCopy[personIndex] = personCopy;

    this.setState({ persons: personsArrCopy });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const personsArrCopy = [...this.state.persons];
    personsArrCopy.splice(personIndex, 1);
    this.setState({ persons: personsArrCopy });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
          persons={this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          />
        </div>
      );

      btnClass = appCssClasses.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(appCssClasses.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(appCssClasses.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={appCssClasses.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
