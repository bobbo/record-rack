import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import RecordGalleryItem from './RecordGalleryItem';

class RecordGallery extends Component {

  render() {
    const records = this.props.store.records;
    if (records.length === 0) {
      return <div>No records in your collection ...</div>;
    }

    return (
      <div>
        {
          this.props.store.records.map(record =>
            <RecordGalleryItem key={record.id} record={record} />)
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
