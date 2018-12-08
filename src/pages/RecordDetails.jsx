import React from 'react';
import PropTypes from 'react-router-prop-types';

import RecordDetails from '../components/RecordDetails.jsx';
import TopBar from '../components/TopBar.jsx';
import appStore from '../data/Store';

const RecordDetailsPage = props => (
  <div>
    <TopBar history={props.history} />
    <div className="pageContent">
      <RecordDetails recordId={props.match.params.id} store={appStore} />
    </div>
  </div>
);

RecordDetailsPage.propTypes = {
  match: PropTypes.match.isRequired,
  history: PropTypes.history.isRequired,
};

export default RecordDetailsPage;
