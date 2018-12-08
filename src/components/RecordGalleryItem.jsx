import React from 'react';
import PropTypes from 'prop-types';

import AlbumCover from './AlbumCover';

const RecordGalleryItem = ({ record }) => {
  const cover = record.cover_image === undefined ? '' : <AlbumCover url={record.cover_image} />;

  return (
    <div key={record.id}>
      {cover}
      {record.title}
    </div>
  );
};

RecordGalleryItem.PropTypes = {
  record: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover_image: PropTypes.string,
  }).isRequired,
};

export default RecordGalleryItem;
