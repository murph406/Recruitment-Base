import { NavLink, withRouter } from 'react-router-dom';


export const TextButton = ({ children, onClick }) => {
    const _Click = () => {
        onClick()
    }

    return (
        <NavLink onClick={_Click} to={'/about'} >
            <div className="clickable-text" >
                {children}
            </div>
        </NavLink>
    )
}