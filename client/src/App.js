import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './css/main.css'
import ScrollToTop from './scrollToTop';
import { NotFound } from './components'


class App extends Component {


  render() {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default App;


const Home = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}>
      <div className="intro-block ">

      </div>
    </div>
  )
}
