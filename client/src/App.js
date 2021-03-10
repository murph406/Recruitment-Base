import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './css/main.css'

import ClientProvider, { } from "./context/client";
import Routes from './routes'



class App extends Component {
  constructor() {
    super()
    this.state = {
      client: null,
      isAppReady: true,
      isNavVisible: true,
      isAuthenticated: false,
      navVisibility: 'hidden',
      navListHover: 'not-hover',
      navTheme: 'light',
    }
  }


  render() {

    const { isAppReady } = this.state

    return (
      <ClientProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ClientProvider>
    );
  }
}

export default App;



