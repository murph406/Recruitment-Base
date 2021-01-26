import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export class Nav extends Component {
  constructor(props) {
    super(props);

    this._toggleNav = this._toggleNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
    this.listHover = this.listHover.bind(this);
    this.homeButton = this.homeButton.bind(this);

    this.state = {
      visibility: 'hidden',
      listHover: 'not-hover',
      isAuthenticated: ''
    }
  }

  _toggleNav(e) {
    this.setState({ visibility: 'show' });
    if (this.state.visibility === 'hidden') {
      this.setState({ visibility: 'show' });
    } else {
      this.setState({ visibility: 'hidden' });
    }
  }

  hideNav() {
    this.setState({ visibility: 'hidden' });
  }

  listHover(e) {
    this.setState({ listHover: 'is-hover' });
    if (this.state.listHover === 'not-hover') {
      this.setState({ listHover: 'is-hover' });
    } else {
      this.setState({ listHover: 'not-hover' });
    }
  }

  homeButton() {
    let { visibility } = this.state

    if (visibility === 'show') {
      this.setState({ visibility: 'hidden' });
    }
  }

  render() {
    let { visibility, listHover } = this.state

    return (
      <header>
        <div className="logo">
          <NavLink onClick={this.homeButton} to="/">Patrick Murphy</NavLink>
        </div>
        <div className="hamburger-container clearfix" onClick={this._toggleNav}>
          <div className={"hamburger clearfix " + visibility}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={"nav " + (visibility)}>
          <div className="flex distribute distribute-center">
              <ul className={"nav-list " + (listHover)} onMouseEnter={this.listHover} onMouseLeave={this.listHover}>
                {/* {ProjectDetails.map((project, index) => {
                  const { client, slug } = project
                  return (
                    <li >
                      <NavLink onClick={this.hideNav} to={"/projects/" + slug} >
                        {client}
                      </NavLink>
                    </li>
                  )
                })} */}
              </ul>
            </div>
        </div>
      </header>
    );
  }
}


// export default withRouter(Nav);