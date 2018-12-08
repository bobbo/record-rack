import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Library from './pages/Library';
import RecordDetails from './pages/RecordDetails';
import AddRecord from './pages/AddRecord';
import appStore from './data/Store';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    appStore.loadRecords();
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" exact component={Library} />
          <Route path="/details/:id" component={RecordDetails} />
          <Route path="/add" component={AddRecord} />
        </div>
      </HashRouter>
    );
  }
}
