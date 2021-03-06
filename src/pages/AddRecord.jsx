import React from 'react';
import PropTypes from 'react-router-prop-types';

import TopBar from '../components/TopBar';
import RecordSelector from '../components/RecordSelector';
import appStore from '../data/Store';

const AddRecord = ({ history }) => (
  <div>
    <TopBar history={history} />
    <div className="pageContent">
      <span>Add Record Page ...</span>
      <RecordSelector store={appStore} />
    </div>
  </div>
);

AddRecord.propTypes = {
  history: PropTypes.history.isRequired,
};

export default AddRecord;
