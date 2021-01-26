import React from 'react';

import { CircleButton } from '../../elements'
import { BasketballGraphic, BasketballGraphic2 } from '../../assets/icons/svg-paths'

export const Home = () => {
  return (
    <div>
      <HomeHero/>
    </div>
  )
}

export const HomeHero = () => {
  return (
    <div className="hero">
      <div className="bb-graphic">
        <BasketballGraphic2
          backgroundColor={'#fff'}
          textColor={'#fff'}
          textBlock1={'KID'}
          textBlock2={'ON'}
          textBlock3={"FIRE"}
        />
      </div>
    </div>
  )
}

export const InstaFeed = () => {
  return (
    <div>
      
    </div>
  )
}