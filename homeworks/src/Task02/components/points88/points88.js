import React, { useState } from 'react'
import styles from './points88.module.css'

export default function Points88() {
    const [fontSize, setFontSize] = useState('16px')

    const changeFontSize = (event) => {
        console.log(event.target.value)
        setFontSize(event.target.value)
    }
    return (
        <>
            <h3>Point 8 of task 2</h3>
            <p className={styles.p} style={{fontSize: fontSize}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.            </p>
            <select className={styles.select} value={fontSize} onChange={changeFontSize}>
                <option value="8px">8px</option>
                <option value="16px">16px</option>
                <option value="24px">24px</option>
                <option value="32px">32px</option>
            </select>
        </>
    )
}
