import React from 'react'
import { HomeDownIcon } from '../../assets/icons/svg-paths'
import { StatsDetail } from '../../elements'

export const Stats = ({ stats }) => {

  console.log("STAT DATA", stats)
  return (
    <div className={'stats-container'}>
      <div className="distribute distribute-between distribute-horizontal full-width">
        {stats.map((stat) => {
          return (
              <StatsDetail textHeader={stat.headline} textDetail={stat.value} />
          )
        })}
      </div>
    </div>
  )
}

