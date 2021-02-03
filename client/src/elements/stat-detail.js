

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

export const StatsDetailSmall = ({ textHeader, textDetail }) => {
    return (
        <div className='small-stat-detail'>
            <div className="text-large">
                {textHeader}
            </div>
            <div className="text-small">
                {textDetail}
            </div>
        </div>
    )
}