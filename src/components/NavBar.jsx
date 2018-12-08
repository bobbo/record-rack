import React from 'react';
import PropTypes from 'react-router-prop-types';

import { NavLink } from 'react-router-dom';

const NavBar = ({ history }) => {
  const back = history !== undefined ? <a role="link" tabIndex={0} onClick={history.goBack}>Back</a> : '';

  return (
    <span id="navBar">
      {back}
      <NavLink to={'/add'}>Add Record</NavLink>
    </span>
  );
};

NavBar.propTypes = {
  history: PropTypes.history,
};

NavBar.defaultProps = {
  history: undefined,
};

export default NavBar;
