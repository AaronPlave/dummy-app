import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

export class App extends Component {
    componentDidMount() {
        this.props.actions.loadInitialApplicationState();
    }
    render() {
        return (
            <div>
                <br/>
                <IndexLink to="/">Colors of Mars</IndexLink>
                <Link className="align-right" to="/about">About</Link>
                <br/>
                <br/>
                {this.props.children}
            </div>
        );
    }
};

App.propTypes = {
    actions: PropTypes.object.isRequired,
    children: PropTypes.element
    // loadInitialApplicationState: PropTypes.func.isRequired
};

export default App;
