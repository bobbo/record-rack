import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as MobxReact from 'mobx-react';

class RecordDetails extends Component {

  async componentDidMount() {
    await this.props.store.selectRecord(this.props.recordId);
  }

  render() {
    if (this.props.store.selectedRecord === undefined) {
      return <div><h1>Loading details ...</h1></div>;
    }

    const record = this.props.store.selectedRecord;

    return (<div>
      <h2>{record.name} - {record.artist}</h2>
    </div>);
  }

}

RecordDetails.propTypes = {
  store: MobxReact.PropTypes.observableObject.isRequired,
  recordId: PropTypes.string.isRequired,
};

RecordDetails = MobxReact.observer(RecordDetails);
export default RecordDetails;
