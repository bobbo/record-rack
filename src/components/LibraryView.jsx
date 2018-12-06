import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';

class LibraryView extends Component {

  render() {
    return (
      <div>
        {
          this.props.store.records.map(record => (
            <div key={record.id}>
              {record.name} - {record.artist}
            </div>
          ))
        }
      </div>
    );
  }

}

LibraryView.propTypes = {
  store: PropTypes.observableObject.isRequired,
};

LibraryView = observer(LibraryView);
export default LibraryView;
