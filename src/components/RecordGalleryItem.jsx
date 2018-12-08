import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecordGalleryItem = ({ record }) => (
  <div key={record.id}>
    <Link key={record.id} to={`/details/${record.id}`}>{record.title}</Link>
  </div>
);

RecordGalleryItem.PropTypes = {
  record: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecordGalleryItem;
