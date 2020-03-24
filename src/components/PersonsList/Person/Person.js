import React, { Component, Fragment } from 'react';

import Aux from '../../../hoc/Aux';
import styled from 'styled-components';
import classes from './Person.css';

class Person extends Component {

    // import './Person.css';
// const StyledDiv = styled.div`
// width: 60%;
// margin: auto;
// border: 1px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// padding: 16px;
// text-align: center;

// @media (min-width: 500px) {
//     width: 450px;
// }`;

    render(){
        console.log('[Person.js] Rendering a person');
        return (
        <Fragment>
            <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p key="i2">{this.props.children}</p>
            <input key="i3" type="text" 
            onChange={this.props.changed} 
            value={this.props.name}/>
        </Fragment>
        
            // <div className="Person" style={style}>
        );
    }

}

export default Person;