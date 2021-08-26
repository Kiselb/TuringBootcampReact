import React, { useState } from 'react'
import styles from './points45.module.css'

export default function Points45() {
    const [items, setItems] = useState([])
    const [text, setItemText] = useState('')
    const [index, setItemNumber] = useState('')

    const handleOnChangeText = (event) => {
        const input = event.target.value.trim()
        if (input.length > 0) setItemText(input)
    }
    const handleOnChangeNumber = (event) => {
        const input = Number(event.target.value)
        if (!isNaN(input) && Number.isInteger(input) && input > 0 && input <= items.length) setItemNumber(input)
    }
    const addItem = (event) => {
        event.preventDefault()
        setItems([...items, text])
        setItemText('')
        event.target.itemtext.focus()
    }
    const removeItem = (event) => {
        event.preventDefault()
        setItems([...items.slice(0, index - 1), ...items.slice(index)])
        setItemNumber('')
        event.target.itemnumber.focus()
    }
    return (
        <>
            <h3>Points 4 and 5 of task 2</h3>
            <form onSubmit={addItem}>
                <input className={styles.input} type="text" value={text} name="itemtext" onChange={handleOnChangeText} placeholder="Enter item text to add to the list"></input>
                <button className={styles.button}>Add item to list</button>
                <p>Items List:</p>
                <ol className={styles.ol}>
                    { items.map((item, index) => <li key={index}>{item}</li>) }
                </ol>
            </form>
            <form onSubmit={removeItem}>
                <input className={styles.input} type="number" value={index} name="itemnumber" onChange={handleOnChangeNumber} placeholder="Enter item number to remove from the list"></input>
                <button className={styles.button}>Remove from list</button>
            </form>
        </>
    )
}
