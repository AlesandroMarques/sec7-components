import React, { Component } from 'react';
import PersonComp from './Person/Person';


// instead of {return ()} can just write => ()
//const persons = (props) => { 

class Persons extends Component{
    static getDirivedStateFromProps(props,state){
        console.log('[Persons.js] getDirivedStateFromProps',props );
        return state;
    }

    shouldComponentUpdate(nextProps,nextState){
        
        // have to return true or false 
        console.log('[Persons.js] shouldCompnentUpdate',this.props, nextProps );
        return true;

    }
    getSnapshotBeforeUpdate(prevProps, prevState){
console.log('[Persons.js]  getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js]  componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[persons.js] component will unmount ');

    }

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





