import React from 'react';

import { CircleButton } from '../../elements'
import { HomeIcon, GithubIcon, FacebookIcon, LinkedInIcon } from '../../assets/icons/svg-paths'

export const HomeHero = () => {

  function onOpenGithub() {
    var url = 'https://github.com/murph406';
    openInNewTab(url)
  
  }

  function onOpenLinkedIn() {
    var url = 'https://www.linkedin.com/in/ryan-murphy-53b19111b';
    // openInNewTab(url)
    var win = window.open(url, '_blank');
    console.log("WIIIN", win)
    // win.focus();


  }

  function onOpenFacebook() {
    var url = 'https://www.facebook.com/ryan.murphy.351756';
    openInNewTab(url)

  }

  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  return (
    <div>
      <div className="hero distribute distribute-center" >
        <div className="container ">
          <div className="face br-1" />
          <div className="hero-details">
            <h1>Hello, I'm Ryan.</h1>
            <p>A passionate software developer with experience taking projects from concept to completion, and leading in small cross-functional teams through the development process.</p>
            <div className="distribute distribute-between">

              <CircleButton onClick={onOpenLinkedIn}>
                <LinkedInIcon color={'#fff'} />
              </CircleButton>
              <CircleButton onClick={onOpenFacebook}>
                <FacebookIcon color={'#fff'} />
              </CircleButton>
              <CircleButton onClick={onOpenGithub}>
                <GithubIcon color={'#fff'} />
              </CircleButton>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
