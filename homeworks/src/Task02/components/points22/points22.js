import React, { useState } from 'react'
import styles from './points22.module.css'

export default function Points22() {
    const [text, setText] = useState('')

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const showCharsCount = () => {
        alert(text.length)
    }
    return (
        <>
            <h3>Point 2 of task 2</h3>
            <p>Enter any text:</p>
            <textarea className={styles.textarea} value={text} onChange={handleOnChange} placeholder="For the text entered in this field, the number of characters will be counted"></textarea>
            <button className={styles.button} onClick={showCharsCount}>Show number of chars</button>
        </>
    )
}
