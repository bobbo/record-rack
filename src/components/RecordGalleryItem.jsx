import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AlbumCover from './AlbumCover';

const RecordGalleryItem = ({ record }) => {
  const cover = record.cover_image === undefined ? '' : <AlbumCover url={record.cover_image} />;

  return (
    <div key={record.id}>
      {cover}
      <Link key={record.id} to={`/details/${record.id}`}>{record.title}</Link>
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
