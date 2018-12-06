import React from 'react';

import RecordGallery from '../components/RecordGallery';
import TopBar from '../components/TopBar';
import appStore from '../store';

const Library = () => (
  <div>
    <TopBar />
    <RecordGallery store={appStore} />
  </div>
);

export default Library;
