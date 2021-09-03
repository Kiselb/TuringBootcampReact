import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
    render() {
        return <h1 style={{color: '#' + (+this.props.color).toString(16)}}>{this.props.text}</h1>
    }
}

export default Header

Header.propTypes = {
    color: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}
