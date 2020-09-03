import React , {Component}from 'react';

import pCssClasses from './Person.css';

//const person = props => {
  class Person extends Component{
    render(){
  console.log('[Person.js] rendering ...');
  return (
    <div className={pCssClasses.Person}>
      <p onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p>{this.props.children}</p>
      <input type="text" onChange={this.props.changed} value={this.props.name} />
    </div>
  );
}}

//export default person;
export default Person;
