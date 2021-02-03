
import React from 'react';
import { Hero } from '../home/Hero'
import { StatsDetailSmall } from '../../elements'

export const AboutPage = (props) => {
    const { data } = props
    const { heroPhoto, firstName, stats } = data

    return (
        <div className="full-width full-height ">
            <div className="distribute distribute-center full-width full-height ">

            </div>
        </div>
    )
}


export const HeroDetails = () => {
    return (
        <div>

        </div>
    )
}



{/* <Hero photoRef={heroPhoto} name={firstName} isHeadLineLarge={true}>
                    <div className="distribute distribute-between distribute-horizontal">
                        <StatsDetailSmall textHeader={stats[1].type} textDetail={stats[1].value} />
                        <StatsDetailSmall textHeader={stats[2].type} textDetail={stats[2].value} />
                        <StatsDetailSmall textHeader={stats[3].type} textDetail={stats[3].value} />
                    </div>
                </Hero> */}