import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <br/>
      <IndexLink to="/">Mars Palettes</IndexLink>
      <Link className="align-right" to="/about">About</Link>
      <br/>
      <br/>
      {props.children}
    </div>
    );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
