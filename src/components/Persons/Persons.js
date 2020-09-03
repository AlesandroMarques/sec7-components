import React, { Component } from 'react';
import PersonComp from './Person/Person';


// instead of {return ()} can just write => ()
//const persons = (props) => { 

class Persons extends Component{
    render(){
    console.log('[Persons.js] rendering....');
    return this.props.persons.map((person, index) => {
        return ( <PersonComp
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)}
          />
        );
    });
    
}}

//export default persons;

export default Persons;





