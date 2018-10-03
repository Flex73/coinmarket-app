import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TickerTable from './containers/TickerTable';
import ErrorPage from './components/ErrorPage';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={TickerTable}/>
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
