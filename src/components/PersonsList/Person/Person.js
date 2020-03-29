import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import styled from 'styled-components';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

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

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        console.log('[Person.js] Rendering a person');
        return (
        <Aux>
            {this.context.authenticated ? <p>Authenticated!</p> : <p>Please, log in</p>}
            <p key="i1" onClick={this.props.click}>
                I'm {this.props.name} and I am {this.props.age} years old!
            </p>
            <p key="i2">{this.props.children}</p>
            <input 
                key="i3" 
                ref={this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}
            />
        </Aux>
        
            // <div className="Person" style={style}>
        );
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default Person;