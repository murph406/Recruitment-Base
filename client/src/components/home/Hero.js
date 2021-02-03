import classNames from 'classnames'

export const Hero = ({ photoRef, name, children, isHeadlineLarge }) => {
    var textClasses = classNames(
        {
            'txt-lg': isHeadlineLarge,
            'txr-sm': !isHeadlineLarge
        }
    );

    return (
        <div className="hero distribute distribute-horizontal">

            <div className="hero-image">
                <img src={photoRef} />
            </div>

            <div className="text-block">
                <h1 className={textClasses}>About {name}</h1>

                <p>
                    Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fri
                </p>
                {children}
            </div>
        </div>
    )
}