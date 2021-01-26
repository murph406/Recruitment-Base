import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './css/main.css'
import ScrollToTop from './scrollToTop';
import { NotFound, Home, Nav, Footer } from './components'


class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/" render={() => {
              return <Redirect to="/home" push />;
            }} />

            <Route exact path="/home" render={() => {
              return <Home />;
            }} />

            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;



