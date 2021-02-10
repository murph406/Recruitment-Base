export const HeroDetails = ({ photoRef, name, text }) => {
    return (
        <div className="about-hero distribute distribute-even distribute-center">



            <div className="text-block">
                <h1>About {name}</h1>

                <h2>{text}</h2>

            </div>

            <div className="hero-image">
                <img src={photoRef} />
            </div>
        </div>
    )
}