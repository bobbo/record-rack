import React from 'react';
import PropTypes from 'react-router-prop-types';

import TopBar from '../components/TopBar';

const AddRecord = ({ history }) => (
  <div>
    <TopBar history={history} />
    <span>Add Record Page ...</span>
  </div>
);

AddRecord.propTypes = {
  history: PropTypes.history.isRequired,
};

export default AddRecord;
