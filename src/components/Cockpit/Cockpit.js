import React, { useEffect } from 'react';
import cockpitCssClasses from './Cockpit.css';


const  cockpit = (props) => {

    useEffect( () => {

      console.log("[Cockpit.js] useEffect");
      //Http Request, instead will demo with timeout 
      setTimeout(()=>{
        alert('saved data to cloud ');
      },1000);
      //this is not run unless Cockpit is removed at somepoint in App.js
      return () => {console.log('[Cockpit.js] cleanup work is useEffect');};
    }, []);

    useEffect(()=> {
      console.log("[Cockpit.js] 2nd useEffect!! ");
      return () => {console.log('[Cockpit.js] 2nd cleanup work is useEffect');};

    });

    let btnClass = '';
    if(props.showPersons){

        btnClass = cockpitCssClasses.Red;
    }
    const assignedClasses = [];
    if (props.persons.length <= 2) {
      assignedClasses.push(cockpitCssClasses.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(cockpitCssClasses.bold); // classes = ['red', 'bold']
    }
return(
//need to wrap in div for now 
    <div className = {cockpitCssClasses.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={props.togglePersons}>
          Toggle Persons
        </button>
</div>



);





};

export default cockpit;