import classNames from 'classnames'

export const Hero = ({ photoRef, name, children, text }) => {

    return (
        <div className="hero distribute distribute-horizontal ">

            <div className="hero-image">
                <img src={photoRef} />
            </div>

            <div className="text-block">
                <h1>About {name}</h1>
                <p>{text}</p>
                {children}
            </div>
        </div>
    )
}