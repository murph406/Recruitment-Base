import React from 'react';
import { NavLink } from 'react-router-dom';
import { ClientIcon } from '../assets/icons/svg-paths'

export const Nav = ({ data, projectDetails, listHover, visibility, onNavHome, onHideNav, onToggleNav, onListHover, theme, onNavLogin }) => {

  const { firstName, lastName } = data



  return (
    <div>
      <div className="logo">
        <NavLink
          onClick={onNavHome}
          to="/">
          <a style={{ color: (theme === 'light') ? '#fff' : '#000' }}>
            {firstName} {lastName}
          </a>
        </NavLink>
      </div>

      <div className="hamburger-container distribute distribute-center ">

        <NavLink to={'/login'} onClick={() => onHideNav('/login')} >
          <div className="client" onClick={onNavLogin}>
            <ClientIcon color={(theme === 'light') ? '#fff' : '#000'} />
          </div>
        </NavLink>


        <HamburgerIcon
          theme={theme}
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
                  <NavLink onClick={() => onHideNav(slug)} to={slug} >
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

const HamburgerIcon = ({ visibility, onClick, theme }) => {



  return (
    <div onClick={onClick}>
      <div className={"hamburger " + visibility}>
        <span style={{ backgroundColor: (theme === 'light') ? '#fff' : '#000' }} ></span>
        <span style={{ backgroundColor: (theme === 'light') ? '#fff' : '#000' }}></span>
        <span style={{ backgroundColor: (theme === 'light') ? '#fff' : '#000' }}></span>
        <span style={{ backgroundColor: (theme === 'light') ? '#fff' : '#000' }}></span>
      </div>
    </div>
  )
}