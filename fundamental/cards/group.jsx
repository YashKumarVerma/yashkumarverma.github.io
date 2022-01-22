import React from "react"

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: '12px',
}

const HomeContextualCardGroup = ({ children }) => {
    return (
        <div style={groupStyles}>
            {children}
        </div>
    )
}

export { HomeContextualCardGroup }
