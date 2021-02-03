import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './css/main.css'
import ScrollToTop from './scrollToTop';
import { NotFound, Home, Nav, Footer, AboutPage } from './components'
import { getClient } from './api/client'


export const ProjectDetails = [
  { pageName: "Highlights", slug: '/highlights' },
  { pageName: "Full Games", slug: '/full-games' },
  { pageName: "Photos", slug: '/photos' },
  { pageName: "About", slug: '/about' },
]


class App extends Component {
  constructor() {
    super()
    this.state = {
      client: {},
      isAppReady: false,
      navVisibility: 'hidden',
      navListHover: 'not-hover',
      navTheme: 'light'
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


  listHover = () => {
    const { navListHover } = this.state

    this.setState({ navListHover: 'is-hover' });

    if (navListHover === 'not-hover') {
      this.setState({ navListHover: 'is-hover' });
    } else {
      this.setState({ navListHover: 'not-hover' });
    }
  }


  onToggleNav = () => {
    const { navVisibility } = this.state

    this.setState({ navVisibility: 'show' });

    if (navVisibility === 'hidden') {
      this.setState({ navVisibility: 'show' });
    } else {
      this.setState({ navVisibility: 'hidden' });
    }
  }


  onNavigateHome = () => {
    let { navVisibility } = this.state

    if (navVisibility === 'show') {
      this.setState({ navVisibility: 'hidden' });
    }
  }

  onHideNav = () => {
    this.setState({ navVisibility: 'hidden' });
  }

  render() {

    const { client, isAppReady, navVisibility, navListHover, navTheme } = this.state

    if (isAppReady) {
      return (
        <BrowserRouter>
          <Nav
            data={{ ...client }}
            projectDetails={ProjectDetails}
            visibility={navVisibility}
            listHover={navListHover}
            theme={navTheme}
            onNavHome={this.onNavigateHome}
            onHideNav={this.onHideNav}
            onToggleNav={this.onToggleNav}
            onListHover={this.listHover}/>
          <div>
            <Switch>
              <Route exact path="/" render={() => {
                return <Redirect to="/home" push />;
              }} />

              <Route exact path="/home" render={() => {
                return <Home data={{ ...client }} />;
              }} />

              <Route exact path="/about" render={() => {
                return <AboutPage data={{ ...client }} />;
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



