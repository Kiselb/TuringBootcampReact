import React, { useState } from 'react'

import styles from './points33.module.css'
import Header from '../components/Header/header'

const Points33 = () => {
    const [color, setColor] = useState(16711680)
    const [text, setText] = useState('Default text')
    const onColorChange = (event) => {
        setColor(event.target.value)
    }
    const onTextChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <h3>Point 3</h3>
            <label className={styles.label}>Color:<input type="number" className={styles.input} onChange={onColorChange} value={color}/></label>
            <label className={styles.label}>Text:<input type="text" className={styles.input} onChange={onTextChange} value={text} /></label>
            <div className={styles.header}>
                <Header color={color} text={text}></Header>
            </div>
        </>
    )
}

export default Points33
