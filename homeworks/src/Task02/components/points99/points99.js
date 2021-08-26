import React, { useState } from 'react'
import styles from './points99.module.css'

export default function Points99() {
    const [items, setItems] = useState([])
    const [text, setItemText] = useState('')

    const handleOnChangeText = (event) => {
        const input = event.target.value.trim()
        if (input.length > 0) setItemText(input)
    }
    const addItem = (event) => {
        setItems([...items, text])
        setItemText('')
    }
    return (
        <>
            <h3>Point 9 of task 2</h3>
            <input className={styles.input} type="text" value={text} name="itemtext" onChange={handleOnChangeText} placeholder="Enter adding option text"></input>
            <button className={styles.button} onClick={addItem}>Add option</button>
            <select className={styles.select}>
                { items.map((option, index) => <option key={index}>{option}</option>) }
            </select>
        </>
    )
}
