
import React, { useState } from 'react';
import { StatsDetailSmall, LinkDetail, BioDetail } from '../../elements'
import { HeroDetails } from './'
import { FacebookIcon } from '../../assets/icons/svg-paths'

export const AboutPage = (props) => {
    const { data } = props
    const { heroPhoto, firstName, stats, links, bio, aboutHero, personalInfo } = data
    console.log(data)
    return (
        <div className="full-width">
            <div className="distribute distribute-center full-width" style={{ minHeight: '75vh' }}>
                <HeroDetails photoRef={heroPhoto} name={firstName} text={aboutHero} personalInfo={personalInfo} />
            </div>
            <StatDetails
                bio={bio}
                stats={stats}
                links={links} />
        </div>
    )
}




const StatDetails = ({ stats, bio, links }) => {
    const data = [
        'Stats',
        'Biography',
        'Links'
    ]
    const [selected, toggleTabs] = useState(0)



    const onToggle = (index) => {
        toggleTabs(index)
    }



    return (
        <div className={"about-stats "}>
            <div className="header-container ">
                <ul className="distribute distribute-horizontal  distribute-even ">
                    {data.map((e, i) => {
                        return (
                            <a
                                onClick={() => onToggle(i)}
                                style={{ opacity: (selected === i) ? '1' : null }}>
                                {e}
                            </a>
                        )
                    })}
                </ul>
            </div>

            <div className={'text-block full-width'}>

                {(data[selected] === 'Biography') && (
                    <div className="">
                        {bio.map((s, i) => {
                            return (
                                <BioDetail
                                    headlineText={s.headline}
                                    detailText={s.text}/>
                            )
                        })}
                    </div>
                )}

                {(data[selected] === 'Stats') && (
                    <div className="grid required stats-grid">
                        {stats.map((s, i) => {
                            return (
                                <StatsDetailSmall
                                    textHeader={s.type}
                                    textDetail={s.value}
                                />
                            )
                        })}
                    </div>

                )}

                {(data[selected] === 'Links') && (
                    <div className="grid required links-grid">
                        {links.map((s, i) => {
                            return (
                                <LinkDetail
                                    icon={<FacebookIcon color={'white'} />}
                                    onClick={() => null}
                                    linkName={s.name}
                                />
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}




