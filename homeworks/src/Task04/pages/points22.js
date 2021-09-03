import React, { useState } from 'react'

import styles from './points22.module.css'
import Button from '../components/Button/button'

const Points22 = () => {
    const [text, setText] = useState('Default Text')
    const onChangeText = (event) => {
        setText(event.target.value)
    }
    const onClick = () => {
        alert('Button clicked!')
    }
    return (
        <>
            <h3>Point 2</h3>
            <label className={styles.label}>Button text:<input type="text" className={styles.input} onChange={onChangeText} value={text}/></label>
            <div className={styles.button}>
                <Button text={text} onClick={onClick}></Button>
            </div>
        </>
    )
}

export default Points22
