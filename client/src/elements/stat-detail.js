export const StatsDetail = ({ textHeader, textDetail }) => {
    return (
        <div className='stat-detail-large'>
            <h1>
                {textHeader}
            </h1>
            <p>
                {textDetail}
            </p>
        </div>
    )
}

export const StatsDetailSmall = ({ textHeader, textDetail, headlineColor, detailColor }) => {
    return (
        <div className='small-stat-detail'>
            <div className="text-large" style={{ color: headlineColor }}>
                {textHeader}
            </div>
            <div className="text-small" style={{ color: detailColor }} >
                {textDetail}
            </div>
        </div>
    )
}


export const LinkDetail = ({ linkName, icon, onClick }) => {
    return (
        <div className='link-detail'>
            <div className={'distribute distribute-center'}>
                <div className="content-container distribute distribute-center distribute-vertical" onClick={onClick}>

                    <h4>
                        {linkName}
                    </h4>
                    <div className={'icon'}>
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    )
}


export const BioDetail = ({ headlineText, detailText }) => {
    return (
        <div className='bio-detail'>
            <div className="headline-text">
                {headlineText}
            </div>


            <div className="detail-text">
                {detailText}
            </div>
        </div>
    )
}