import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Library from './pages/Library';
import RecordDetails from './pages/RecordDetails';
import appStore from './store';

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
        </div>
      </HashRouter>
    );
  }
}
