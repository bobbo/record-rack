import React from 'react';
import { Link } from 'react-router-dom';

const Library = () => (
  <div>
    <h2>Library!</h2>
    <div><Link to="/details">Go to details</Link></div>
  </div>
);

export default Library;
