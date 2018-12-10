import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as MobxReact from 'mobx-react';

import AlbumCover, { CoverSizeLarge } from './AlbumCover';

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
      <div className="detailsCover">
        <AlbumCover url={record.albumCover} size={CoverSizeLarge} />
      </div>
      <div className="detailsRight">
        <div className="detailsHeader"><h2>{record.title} - {record.artist}</h2></div>
        <div className="detailsSub">Released {record.year}</div>
      </div>
      <div>
        <ul className="trackList">
          {
            record.trackList.map(track => <li key={track}>{track}</li>)
          }
        </ul>
      </div>
    </div>);
  }

}

RecordDetails.propTypes = {
  store: MobxReact.PropTypes.observableObject.isRequired,
  recordId: PropTypes.string.isRequired,
};

RecordDetails = MobxReact.observer(RecordDetails);
export default RecordDetails;
