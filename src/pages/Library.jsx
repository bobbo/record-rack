import React from 'react';
// import { Link } from 'react-router-dom';

import LibraryView from '../components/LibraryView';
import appStore from '../store';

const Library = () => (
  <div>
    <h1>Record Rack</h1>
    <LibraryView store={appStore} />
  </div>
);

export default Library;
