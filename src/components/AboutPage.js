import React from 'react';
import { Link } from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        Color palettes based off HiRISE imagery
      </p>
    </div>
    );
};

export default AboutPage;
