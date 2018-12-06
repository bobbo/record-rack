import React from 'react';
import PropTypes from 'react-router-prop-types';

const NavBar = ({ history }) => (
  <div>
    <a role="link" tabIndex={0} onClick={history.goBack}>Back</a>
  </div>
);

NavBar.propTypes = {
  history: PropTypes.history.isRequired,
};

export default NavBar;
