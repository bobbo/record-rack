import React from 'react';
import PropTypes from 'prop-types';

const CoverSizeSmall = Symbol('cover-size-small');
const CoverSizeLarge = Symbol('cover-size-large');

const CoverSizeStyles = {
  [CoverSizeSmall]: 'coverSmall',
  [CoverSizeLarge]: 'coverLarge',
};

const AlbumCover = ({ url, size }) => {
  const style = CoverSizeStyles[size];

  // TODO: alt etc.
  return <img className={style} src={url} />;
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
