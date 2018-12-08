import React from 'react';
import PropTypes from 'react-router-prop-types';

import NavBar from './NavBar.jsx';

const TopBar = props => (
  <div className="topBar">
    <span><img id="logo" src="../assets/logo.svg" /></span>
    <span className="title">Record Rack</span>
    <NavBar history={props.history} />
  </div>);

TopBar.propTypes = {
  history: PropTypes.history,
};

TopBar.defaultProps = {
  history: undefined,
};

export default TopBar;
