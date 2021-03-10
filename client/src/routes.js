import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom';

import './css/main.css'
import { Home, AboutPage, PhotoPage, LoginPage, VideoPage, ClientPortalPage } from './components'
import { Footer, Nav, NotFound } from './elements'
import { ProtectedRoute } from './helpers'
import { withContext as withClientContext } from "./context/client";

export const ProjectDetails = [
    { pageName: "Home", slug: '/home', navTheme: 'light', hidden: false },
    { pageName: "About", slug: '/about', navTheme: 'dark', hidden: false },
    { pageName: "Photos", slug: '/photos', navTheme: 'dark', hidden: false },
    { pageName: "Highlights", slug: '/highlights', navTheme: 'dark', hidden: false },
    { pageName: "Full Games", slug: '/full-games', navTheme: 'dark', hidden: false },
    { pageName: "Login", slug: '/login', navTheme: 'dark', hidden: true },
    { pageName: "Client Portal", slug: '/client-portal', navTheme: 'light', hidden: true },
]


class Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavVisible: true,
            navVisibility: 'hidden',
            navListHover: 'not-hover',
            navTheme: 'light',
        }
    }

    componentDidMount() {
        const { userContext } = this.props
        const { isAppReady, isAuthenticated, client } = userContext
    }


    componentDidMount() {
        let isNavDark = false
        const path = window.location.pathname

        if (
            // Conditions
            path === '/photos' ||
            path === '/about' ||
            path === '/highlights' ||
            path === '/login' ||
            path === '/full-games' ||
            path === '/client-portal'

        ) {
            isNavDark = true
        }
        this.setState({ isAppReady: true, navTheme: (isNavDark) ? 'dark' : 'light' })
        console.log("YEE Boi", this.state.client)
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

     onLogin = async(password) => {
            // Call Context if  authenticated then resolve
            const { userContext, history } = this.props
            const { onAuth } = userContext

            try {
                const res = await onAuth(password)
                debugger
                history.push("/client-portal")

            } catch (e) {
                debugger
                console.log(e)
            }
    }

    render() {
        const { navListHover, navVisibility, navTheme, isNavVisible } = this.state
        const { userContext } = this.props
        const { isAppReady, isAuthenticated, client } = userContext

        if (!isAppReady) {
            // LOAD PAGE LOGIC

            return (
                <div style={{ backgroundColor: 'red', height: '100vh', width: '100vw' }}>

                </div>
            )
        }

        if (isAppReady) {
            return (
                // <BrowserRouter>
                <div>

                    <Nav
                        data={{ ...client }}
                        projectDetails={ProjectDetails}
                        visibility={navVisibility}
                        listHover={navListHover}
                        theme={navTheme}
                        onNavHome={this.onNavigateHome}
                        onHideNav={(slug) => this.onHideNav(slug)}
                        isNavVisible={isNavVisible}
                        isAuthenticated={isAuthenticated}
                        onToggleNav={this.onToggleNav}
                        onListHover={this.listHover} />
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


                        <Route exact path="/login" render={() => {
                            return (
                                <LoginPage login={(password) => this.onLogin(password)} />
                            )
                        }} />

                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            component={ClientPortalPage} />

                        <Route component={NotFound} />
                    </Switch>


                    <Footer isNavVisible={isNavVisible} />
                </div>

                // </BrowserRouter>

            )
        }
    }
}

export default withRouter(withClientContext(Routes));