import React from 'react';
import PropTypes from 'react-router-prop-types';

import { NavLink } from 'react-router-dom';

const NavBar = ({ history }) => {
  const back = history !== undefined
    ? <a className="menuItem" role="link" tabIndex={0} onClick={history.goBack}>« Back</a>
    : '';

  return (
    <span id="navBar">
      {back}
      <span className="menuItem"><NavLink to={'/add'}>+ Add Record</NavLink></span>
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
