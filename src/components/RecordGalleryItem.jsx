import React from 'react';
import PropTypes from 'prop-types';

import AlbumCover from './AlbumCover';

const RecordGalleryItem = ({ record }) => {
  const cover = record.albumCover === undefined ? '' : <AlbumCover url={record.albumCover} />;

  return (
    <div key={record.id}>
      {cover}
      {record.title} - {record.artist}
    </div>
  );
};

RecordGalleryItem.PropTypes = {
  record: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    cover_image: PropTypes.string,
  }).isRequired,
};

export default RecordGalleryItem;
