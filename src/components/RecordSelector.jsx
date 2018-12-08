import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import DebounceInput from 'react-debounce-input';

import RecordSelectorItem from './RecordSelectorItem';

class RecordSelector extends Component {

  constructor(props) {
    super(props);
    this.onType = this.onType.bind(this);
  }

  componentWillMount() {
    this.setState({ value: 'Search ...' });
  }

  async onType(event) {
    const input = event.target.value;
    this.setState({ value: input });
    await this.props.store.searchDiscogsRecords(input);
  }

  render() {
    console.log(this.props.store.searchResults);
    const results = this.props.store.searchResults.map(record => (
      <RecordSelectorItem key={record.id} record={record} />
    ));

    return (<div>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        value={this.state.value}
        onChange={this.onType}
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
