import React from 'react';
import PropTypes from 'prop-types';

const AlbumCover = ({ url }) => {
  const style = {
    width: '75px',
  };

  // TODO: alt etc.
  return <img style={style} src={url} />;
};

AlbumCover.propTypes = {
  url: PropTypes.string.isRequired,
};

export default AlbumCover;
