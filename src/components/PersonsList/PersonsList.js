import React, { PureComponent } from 'react';

import Person from './Person/Person';

class PersonsList extends PureComponent {

    // static getDerivedStateFromProps(){
    //     console.log('[PersonsList.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log('[Person.js] componentWillReceiveProps');
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[PersonsList.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked) {
    //         return true;
    //     } else  {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[PersonsList.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[PersonsList.js] componentDidUpdate');
        console.log(snapshot);
    }
    
    componentWillUnmount() {
        console.log ('[PersonsList.js] componentWillUnmount');
    }

    render ()  {
        console.log('[PersonsList.js] rendering list of persons');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={event => this.props.changed(event, person.id)}
                    isAuth={this.props.isAuthenticated}
                />);
        })
    };
}

export default PersonsList;