import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import DebounceInput from 'react-debounce-input';

import RecordGalleryItem from './RecordGalleryItem';

class RecordSelector extends Component {

  componentWillMount() {
    this.setState({ value: 'Search ...' });
  }

  async onType(event) {
    const input = event.target.value;
    this.setState({ value: input });
    await this.props.store.searchDiscogsRecords(input);
  }

  render() {
    const onChange = this.onType.bind(this);
    console.log(this.props.store.searchResults);
    const results = this.props.store.searchResults.map(record => <RecordGalleryItem key={record.id} record={record} />);

    return (<div>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        value={this.state.value}
        onChange={onChange}
      />
      <div>{results}</div>
    </div>);
  }

}

RecordSelector.propTypes = {
  store: PropTypes.observableObject.isRequired,
};

RecordSelector = observer(RecordSelector);
export default RecordSelector;
