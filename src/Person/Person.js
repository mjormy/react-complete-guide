import React from 'react';
import Radium, { StyleRoot } from 'radium';

import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <StyleRoot>
            <div className="Person" style={style}>
                <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
        </StyleRoot>
    )
};

export default Radium(person);