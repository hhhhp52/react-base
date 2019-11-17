import { connect } from 'react-redux';
import React from 'react';
import { Router  , Route , Switch } from 'react-router-dom';
import Home from './Home/Home'

import createHistory from 'history/createBrowserHistory';

function App() {
  return (
      <div >
        <Router history={createHistory()}>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default connect()(App);
