import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import RecordGalleryItem from './RecordGalleryItem';

class RecordGallery extends Component {

  render() {
    return (
      <div>
        {
          this.props.store.records.map(record => <RecordGalleryItem record={record} />)
        }
      </div>
    );
  }

}

RecordGallery.propTypes = {
  store: PropTypes.observableObject.isRequired,
};

RecordGallery = observer(RecordGallery);
export default RecordGallery;
