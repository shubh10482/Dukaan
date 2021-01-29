import React from 'react'
import PropTypes from 'prop-types'
import ComingSoonImage from '../assets/images/coming-soon.jpg'

const comingSoon = props => {
    return (
        <>
            <div style={{background: "black", color: "white", textAlign: "center"}}>
                <strong>{props.name} page is in progress...</strong>            
                <img src={ComingSoonImage} alt="" />
            </div>
        </>
    )
}

comingSoon.defaultProps = {
    name: ''
}

comingSoon.propTypes = {
    name: PropTypes.string.isRequired
}

export default comingSoon