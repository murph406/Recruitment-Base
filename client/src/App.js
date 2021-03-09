import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './css/main.css'
import { Home, AboutPage, PhotoPage, LoginPage, VideoPage, ClientControlsPage } from './components'
import { Footer, Nav, NotFound } from './elements'
import { getClient } from './api/client'
import { ProtectedRoute } from './helpers'

export const ProjectDetails = [
  { pageName: "Home", slug: '/home', navTheme: 'light', hidden: false },
  { pageName: "About", slug: '/about', navTheme: 'dark', hidden: false },
  { pageName: "Photos", slug: '/photos', navTheme: 'dark', hidden: false },
  { pageName: "Highlights", slug: '/highlights', navTheme: 'dark', hidden: false },
  { pageName: "Full Games", slug: '/full-games', navTheme: 'dark', hidden: false },
  { pageName: "Login", slug: '/login', navTheme: 'dark', hidden: true },
  { pageName: "Edit Client", slug: '/edit-client', navTheme: 'light', hidden: true },
]


class App extends Component {
  constructor() {
    super()
    this.state = {
      client: {},
      isAppReady: false,
      isNavVisible: true,
      isAuthenticated: true,
      navVisibility: 'hidden',
      navListHover: 'not-hover',
      navTheme: 'light',
    }
  }

  async componentDidMount() {
    let isNavDark = false
    const path = window.location.pathname

    try {

      let client = await getClient()
      client = client.data[0]

      console.log("YEE Boi", path, client)

      if (
        path === '/photos' ||
        path === '/about' ||
        path === '/highlights' ||
        path === '/login' ||
        path === '/full-games' ||
        path === '/edit-client'

      ) {
        isNavDark = true
      }
      // debugger
      this.setState({ client: client, isAppReady: true, navTheme: (isNavDark) ? 'dark' : 'light' })
      console.log("YEE Boi", this.state.client)


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

  onToggleNavVisibility = () => {
    const { isNavVisible } = this.state

    if (isNavVisible) {
      this.setState({ isNavVisible: false });
    }
    if (!isNavVisible) {
      this.setState({ isNavVisible: true });
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

    const { client, isAppReady, navVisibility, navListHover, navTheme, isNavVisible, isAuthenticated } = this.state

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
            isNavVisible={isNavVisible}
            onToggleNav={this.onToggleNav}
            onListHover={this.listHover} />
          <div>
            <Switch>
              <Route exact path="/" render={() => {
                return <Redirect to="/home" push />;
              }} />

              <Route exact path="/home" render={() => {
                return <Home data={{ ...client }} onNavTo={(slug) => this.onHideNav(slug)} />;
              }} />

              <Route exact path="/about" render={() => {
                return <AboutPage data={{ ...client }} />;
              }} />

              <Route exact path="/photos" render={() => {
                return <PhotoPage data={{ ...client }} toggleHeader={this.onToggleNavVisibility} />;
              }} />

              <Route exact path="/highlights" render={() => {
                return (
                  <VideoPage
                    title={"Highlights"}
                    textDetails={"A collection of highlights by "}
                    data={{ ...client }}
                    toggleHeader={this.onToggleNavVisibility} />
                )
              }} />

              <Route exact path="/full-games" render={() => {
                return (
                  <VideoPage
                    title={"Full Games"}
                    textDetails={"A collection of full games played by "}
                    data={{ ...client }}
                    toggleHeader={this.onToggleNavVisibility} />
                )
              }} />


              {/* Auth Logic */}

              <Route exact path="/login" render={() => {
                return <LoginPage />;
              }} />

              <ProtectedRoute
              isAuthenticated={isAuthenticated}
              component={ClientControlsPage}/>



              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer isNavVisible={isNavVisible} />
        </BrowserRouter>
      );
    } else
      return (
        <div style={{ backgroundColor: 'red', height: '100vh', width: '100vw' }}>

        </div>
      )

  }
}

export default App;



