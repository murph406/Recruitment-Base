import React from 'react';
import { NavLink } from 'react-router-dom';
import { ClientIcon } from '../assets/icons/svg-paths'

export const Nav = ({ data, projectDetails, listHover, visibility, onNavHome, onHideNav, onToggleNav, onListHover, theme }) => {

  const { firstName, lastName } = data

  return (
    <div>
      <div className="logo">
        <NavLink
          onClick={onNavHome}
          to="/">
          <a style={{ color: '#fff' }}>
            {firstName} {lastName}
          </a>
        </NavLink>
      </div>

      <div className="hamburger-container distribute distribute-center ">

        <div className="client">
          <ClientIcon color={'#fff'} />
        </div>

        <HamburgerIcon
          visibility={visibility}
          onClick={onToggleNav} />
      </div>

      <div className={"nav " + (visibility)}>
        <div className="flex distribute distribute-center">
          <ul className={"nav-list " + (listHover)} onMouseEnter={onListHover} onMouseLeave={onListHover}>
            {projectDetails.map((project, index) => {
              const { pageName, slug } = project
              return (
                <li >
                  <NavLink onClick={onHideNav} to={slug} >
                    {pageName}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

const HamburgerIcon = ({ visibility, onClick }) => {
  return (
    <div onClick={onClick}>
      <div className={"hamburger " + visibility}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}