import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Library from './pages/Library';
import RecordDetails from './pages/RecordDetails';

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" exact component={Library} />
          <Route path="/details" component={RecordDetails} />
        </div>
      </HashRouter>
    );
  }
}
