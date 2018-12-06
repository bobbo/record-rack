import React from 'react';
import PropTypes from 'react-router-prop-types';

import RecordDetails from '../components/RecordDetails.jsx';
import appStore from '../store';

const RecordDetailsPage = props => (
  <RecordDetails recordId={props.match.params.id} store={appStore} />
);

RecordDetailsPage.propTypes = {
  match: PropTypes.match.isRequired,
};

export default RecordDetailsPage;
