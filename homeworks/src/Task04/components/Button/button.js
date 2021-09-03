import React from 'react'
import PropTypes from 'prop-types'

import styles from './button.module.css'

const Button = ({ text, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>{text}</button>
    )
}

export default Button

Image.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
