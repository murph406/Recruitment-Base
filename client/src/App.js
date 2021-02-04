import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './css/main.css'
import ScrollToTop from './scrollToTop';
import { NotFound, Home, Nav, Footer, AboutPage, PhotoPage, HighlightPage, FullGamesPage, LoginPage } from './components'
import { getClient } from './api/client'


export const ProjectDetails = [
  { pageName: "Home", slug: '/home', navTheme: 'light', hidden: false },
  { pageName: "About", slug: '/about', navTheme: 'dark', hidden: false },
  { pageName: "Photos", slug: '/photos', navTheme: 'dark', hidden: false },
  { pageName: "Highlights", slug: '/highlights', navTheme: 'dark', hidden: false },
  { pageName: "Full Games", slug: '/full-games', navTheme: 'dark', hidden: false },
  { pageName: "Login", slug: '/login', navTheme: 'dark', hidden: true },
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
      this.setState({ navVisibility: 'show', navTheme: 'light' });
    } else {
      this.setState({ navVisibility: 'hidden' });
    }
  }


  onNavigateHome = () => {
    let { navVisibility } = this.state

    if (navVisibility === 'show') {
      this.setState({ navVisibility: 'hidden', navTheme: 'light' });
    }
    this.setState({ navTheme: 'light' });

  }

  onHideNav = (navSlug) => {

    const page = ProjectDetails.find(d => d.slug === navSlug)

    this.setState({ navVisibility: 'hidden', navTheme: page.navTheme });
  }




  toggleNavToLight = () => {
    const { navTheme } = this.state

    if (navTheme === 'dark') {
      this.setState({ navTheme: 'light' })
    }

  }

  toggleNavToDark = () => {
    const { navTheme } = this.state

    if (navTheme === 'light') {
      this.setState({ navTheme: 'dark' })
    }

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
            onHideNav={(slug) => this.onHideNav(slug)}
            onToggleNav={this.onToggleNav}
            onListHover={this.listHover} />
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

              <Route exact path="/photos" render={() => {
                return <PhotoPage />;
              }} />

              <Route exact path="/highlights" render={() => {
                return <HighlightPage />;
              }} />

              <Route exact path="/full-games" render={() => {
                return <FullGamesPage />;
              }} />

              <Route exact path="/login" render={() => {
                return <LoginPage />;
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



