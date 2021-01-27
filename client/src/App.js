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
import { getClient } from './api/client'


class App extends Component {
  constructor() {
    super()
    this.state = {
      client: {},
      isAppReady: false
    }
  }

  async componentDidMount() {
    try {
      const client = await getClient()

      console.log("YEE Boi", client)
      this.setState({ client: client.data, isAppReady: true })

    } catch (e) {
      console.log("ERR", e)
    }
  }




  render() {

    const { client, isAppReady } = this.state


    if (isAppReady) {
      return (
        <BrowserRouter>
          <Nav data={{ ...client }} />
          <div>
            <Switch>
              <Route exact path="/" render={() => {
                return <Redirect to="/home" push />;
              }} />

              <Route exact path="/home" render={() => {
                return <Home data={{ ...client }} />;
              }} />

              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      );
    } else
      return (
        <div>

        </div>
      )

  }
}

export default App;



