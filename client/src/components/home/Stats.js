import React from 'react'
import { HomeDownIcon } from '../../assets/icons/svg-paths'
import { StatsDetail } from '../../elements'

export const Stats = ({ stats }) => {

  return (
    <div className={'stats-container'}>
      <div className="distribute distribute-between distribute-horizontal full-width">
        <StatsDetail   textHeader={stats[5].type} textDetail={stats[5].value}/>
        <StatsDetail   textHeader={stats[3].type} textDetail={stats[3].value}/>
        <StatsDetail   textHeader={stats[7].type} textDetail={stats[7].value}/>
        <StatsDetail   textHeader={stats[8].type} textDetail={stats[8].value}/>
      </div>
      <div className="explore distribute distribute-center">
        {/* <div className="distribute distribute-vertical distribute-center" >
          <h1>Explore</h1>
          <div className="icon">
            <HomeDownIcon color={'#9e9e9e'} />
          </div>
        </div> */}
      </div>
    </div>
  )
}

