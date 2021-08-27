import React, { useState } from 'react'
import styles from './points77.module.css'

export default function Points77() {
    const [checked, setChecked] = useState(true)

    const toggleBox = () => {
        setChecked(!checked)
    }
    return (
        <>
            <h3>Point 7 of task 2</h3>
            <label><input className={styles.input} type="checkbox" checked={checked} onChange={toggleBox}/>Turn Box On</label>
            {/* <div className={styles.box} style={{visibility: checked? "visible": "hidden"}}></div> */}
            <div className={`${styles.box} ${checked? styles.on: ''}`}></div>
        </>
    )
}
