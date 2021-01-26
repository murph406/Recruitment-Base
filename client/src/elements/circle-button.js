import React from 'react'

export const CircleButton = ({ children, onClick }) => {
    return (
        <div
            className="button"
            onClick={onClick}>
            {children}
        </div >

    )
}