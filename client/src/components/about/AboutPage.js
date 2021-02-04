
import React, { useState } from 'react';
import { StatsDetailSmall } from '../../elements'

export const AboutPage = (props) => {
    const { data } = props
    const { heroPhoto, firstName, stats } = data

    return (
        <div className="full-width">
            <div className="distribute distribute-center full-width" style={{ height: '75vh' }}>
                <HeroDetails photoRef={heroPhoto} name={firstName} />
            </div>
            <div className="distribute distribute-center full-width bg-red" style={{ height: '50vh' }}>
                <StatDetails />
            </div>
        </div>
    )
}


export const HeroDetails = ({ photoRef, name }) => {
    return (
        <div className="about-hero distribute distribute-even distribute-center">



            <div className="text-block">
                <h1>About {name}</h1>

                <h2>
                    Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fri
            </h2>

            </div>

            <div className="hero-image">
                <img src={photoRef} />
            </div>
        </div>
    )
}

const StatDetails = ({ stats, bio, }) => {
    return (
        <div className={"about-stats distribute distribute-even distribute-center"}>
            <div className={'stat-picker'}>
                <h1>Bio</h1>
                <h1>Stats</h1>
                <h1>Links</h1>
            </div>

            <div className={'text-block'}>

                <h3>
                    Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fri
                 </h3>

            </div>
        </div>
    )
}
