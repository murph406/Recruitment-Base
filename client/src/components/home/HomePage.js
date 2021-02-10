import React from 'react';

import { ArrowRightIcon } from '../../assets/icons/svg-paths'
import { Graphic } from './Graphic'
import { Stats } from './Stats'
import { Hero } from './Hero'
import { TextButton } from '../../elements/'


export const Home = (props) => {

  const { data, onNavTo } = props
  const { heroPhoto, firstName, stats, bio } = data

  console.log("DATA", data)

  return (
    <div>
      <Graphic />
      <Stats stats={[...stats, bio]} />
      <Hero photoRef={heroPhoto} name={firstName} >

        <div style={{ height: '50px', justifyContent: 'center', marginTop: '50px' }}>
          <TextButton onClick={() => onNavTo('/about')}>
            <div className="distribute distribute-horizontal distribute-center">
              <p>More</p>

              <div className="icon">
                <ArrowRightIcon />
              </div>
            </div>
          </TextButton>
        </div>

      </Hero>
    </div>
  )
}
