import React from 'react';

// import { CircleButton } from '../../elements'
import { BasketballGraphic, BasketballGraphic2 } from '../../assets/icons/svg-paths'
import { Graphic } from './Graphic'
import { StatsDetail } from './Stats'
import { Hero } from './Hero'


export const Home = (props) => {

  const { data } = props
  const { heroPhoto, firstName } = data

  return (
    <div>
      <Graphic />
      <StatsDetail />
      <Hero photoRef={heroPhoto} name={firstName}/>
    </div>
  )
}





export const InstaFeed = () => {
  return (
    <div>

    </div>
  )
}