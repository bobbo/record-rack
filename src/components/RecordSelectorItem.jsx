import React from 'react';
import PropTypes from 'prop-types';
import * as Mobx from 'mobx-react';
import LaddaButton, { XL, SLIDE_UP } from 'react-ladda';

import RecordGalleryItem from './RecordGalleryItem';

export default class RecordSelectorItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = { working: false };
    this.onClick = this.onClick.bind(this);
  }

  async onClick() {
    this.setState({ working: true });
    await this.props.store.saveRecord(this.props.record.id);
  }

  render() {
    return (
      <div>
        <RecordGalleryItem record={this.props.record} />
        <LaddaButton
          loading={this.state.working}
          onClick={this.onClick}
          data-color="#eee"
          data-size={XL}
          data-style={SLIDE_UP}
          data-spinner-size={30}
          data-spinner-color="#ddd"
          data-spinner-lines={12}
        >
          Add
        </LaddaButton>
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
  store: Mobx.PropTypes.observableObject.isRequired,
};
