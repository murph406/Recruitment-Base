import React from 'react'
import { HomeDownIcon } from '../../assets/icons/svg-paths'

export const StatsDetail = () => {


  function StatFactory(textHeader, textDetail) {
    return (
      <div className='stat'>
        <h1>
          {textHeader}
        </h1>
        <p>
          {textDetail}
        </p>
      </div>
    )
  }

  return (
    <div className={'stats-detail'}>
      <div className="distribute distribute-between distribute-horizontal full-width">
        {StatFactory("GPA", "3.3")}
        {StatFactory("Points", "26")}
        {StatFactory("Rebounds", "6")}
        {StatFactory("Blocks", "3")}
      </div>
      <div className="explore distribute distribute-center">
        <div className="distribute distribute-vertical distribute-center" >
          <h1>Explore</h1>
          <div className="icon">
            <HomeDownIcon color={'#9e9e9e'} />
          </div>
        </div>
      </div>
    </div>
  )
}

