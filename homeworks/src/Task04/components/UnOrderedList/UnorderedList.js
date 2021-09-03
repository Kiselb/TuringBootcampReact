import React from 'react'
import PropTypes from 'prop-types'

import styles from './UnorderedList.module.css'

const UnorderedList = ({ listItems }) => {
    return (
        <ul className={styles.ul}>
            {listItems.map((item, index) => <li  className={styles.li} key={index}>{item}</li>)}
        </ul>
    )
}

export default UnorderedList

UnorderedList.propTypes = {
    listItems: PropTypes.arrayOf(PropTypes.string)
}
