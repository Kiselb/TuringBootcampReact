import React, { useState } from 'react'
import styles from './points11.module.css'

export default function Points11() {
    const [text, setText] = useState('')

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <h3>Point 1 of task 2</h3>
            <p>Enter any text:</p>
            <textarea className={styles.textarea} onChange={handleOnChange} placeholder="The text entered in this field will be immediately displayed in the output control"></textarea>
            <p>Output:</p>
            <p className={styles.p}>{text}</p>
        </>
    )
}
