import React from 'react';

import RecordGallery from '../components/RecordGallery';
import appStore from '../store';

const Library = () => (
  <div>
    <h1>Record Rack</h1>
    <RecordGallery store={appStore} />
  </div>
);

export default Library;
