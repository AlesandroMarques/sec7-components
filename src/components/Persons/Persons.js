import React from 'react';
import PersonComp from './Person/Person';


// instead of {return ()} can just write => ()
const persons = (props) => props.persons.map((person, index) => {
        return <PersonComp
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}
          />
        
      });

export default persons;







