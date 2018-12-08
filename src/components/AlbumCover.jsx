import React from 'react';
import PropTypes from 'prop-types';

const CoverSizeSmall = Symbol('cover-size-small');
const CoverSizeLarge = Symbol('cover-size-large');

const CoverSizeStyles = {
  [CoverSizeSmall]: {
    width: '75px',
  },
  [CoverSizeLarge]: {
    width: '33%',
  },
};

const AlbumCover = ({ url, size }) => {
  const style = CoverSizeStyles[size];

  // TODO: alt etc.
  return <img style={style} src={url} />;
};

AlbumCover.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.symbol,
};

AlbumCover.defaultProps = {
  size: CoverSizeSmall,
};

export { CoverSizeSmall, CoverSizeLarge };
export default AlbumCover;
