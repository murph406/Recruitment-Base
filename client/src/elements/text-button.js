import { NavLink, withRouter } from 'react-router-dom';


export const TextButton = ({ children }) => {
    return (
        <NavLink to={'/about'}>
            <div className="clickable-text">
                {children}
            </div>
        </NavLink>
    )
}