import React from 'react';
import PropTypes from 'react-router-prop-types';

import NavBar from './NavBar.jsx';

const TopBar = (props) => {
  const nav = props.history !== undefined ? <NavBar history={props.history} /> : '';
  return <div><span>RecordRack</span>{nav}</div>;
};

TopBar.propTypes = {
  history: PropTypes.history,
};

TopBar.defaultProps = {
  history: undefined,
};

export default TopBar;
