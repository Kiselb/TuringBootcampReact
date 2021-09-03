import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ src, width, height }) => {
    return (
        <img src={src} width={width} height={height} alt=""/>
    )
}

export default Image

Image.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}
