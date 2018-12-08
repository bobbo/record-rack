import React from 'react';
import PropTypes from 'prop-types';
import ProgressButton from 'react-progress-button';

import RecordGalleryItem from './RecordGalleryItem';

export default class RecordSelectorItem extends React.Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  async onClick() {
    console.log(`would add ${this.props.record.title}`);
  }

  render() {
    return (
      <div>
        <RecordGalleryItem record={this.props.record} />
        <ProgressButton onClick={this.onClick}>Add</ProgressButton>
      </div>
    );
  }

}

RecordSelectorItem.propTypes = {
  record: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover_image: PropTypes.string,
  }).isRequired,
};
