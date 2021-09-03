import React from 'react'
import PropTypes from 'prop-types'

class Link extends React.Component {
    render() {
        return <a href={this.props.href} style={{textDecoration: (!!this.props.isUnderlined)?('underline'):('none')}}>{this.props.text}</a>
    }
}

export default Link

Link.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isUnderlined: PropTypes.bool.isRequired
}
