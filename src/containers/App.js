import React, { Component } from 'react';

import appCssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js ] constructor');
   // can set state here
    }
  
  // this calls constructor behind the seens 
  state = {
    persons: [
      { id: 'asfa1', name: 'Alesandro', age: 24 },
      { id: 'vasdf1', name: 'Daniel', age: 28 },
      { id: 'asdf11', name: 'Savino', age: 20 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] get derived state from props ', props);
    return state;

  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate', nextState,this.state);
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');

  }

  

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
    console.log('[app.js] render()');
    let persons = null;
   

    if (this.state.showPersons) {
      persons = (
          <Persons
          persons={this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          />
      );

      
    }

   

    return (
      <div className={appCssClasses.App}>
        <Cockpit
        title = {this.props.appTitle}
        persons = {this.state.persons}
        showPersons = {this.state.showPersons}
        togglePersons = {this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
