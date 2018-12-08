import React from 'react';
import PropTypes from 'react-router-prop-types';

import TopBar from '../components/TopBar';
import RecordSelector from '../components/RecordSelector';
import appStore from '../data/Store';

const AddRecord = ({ history }) => (
  <div>
    <TopBar history={history} />
    <span>Add Record Page ...</span>
    <RecordSelector store={appStore} />
  </div>
);

AddRecord.propTypes = {
  history: PropTypes.history.isRequired,
};

export default AddRecord;
