import { StatsDetailSmall } from '../../elements'


export const HeroDetails = ({ photoRef, name, text, personalInfo }) => {
    return (
        <div className="about-hero full-width pt-5 pb-5">
            <div className=" distribute distribute-even distribute-center pt-5">
                <div className="text-block">
                    <h1>About {name}</h1>
                    <h2>{text}</h2>
                </div>

                <div className="hero-image">
                    <img src={photoRef} />
                </div>

            </div>

            <div className="full-width pb-5">
                <div className="grid required stats-grid ">
                    {personalInfo.map((s, i) => {
                        return (
                            <StatsDetailSmall
                                textHeader={s.type}
                                textDetail={s.value}
                                headlineColor={'black'}
                                detailColor={'#9e9e9e'}
                            />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}