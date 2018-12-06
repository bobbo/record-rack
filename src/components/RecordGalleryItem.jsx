import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecordGalleryItem = ({ record }) => (
  <div key={record.id}>
    <Link to={`/details/${record.id}`}>{record.artist} - {record.name}</Link>
  </div>
);

RecordGalleryItem.PropTypes = {
  record: PropTypes.shape({
    id: PropTypes.number.isRequired,
    artist: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecordGalleryItem;
