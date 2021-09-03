import React, { useState } from 'react'

import styles from './points44.module.css'
import Link from '../components/Link/link'

const Points44 = () => {
    const [href, setHRef] = useState('https://www.google.com')
    const [text, setText] = useState('Google')
    const [underlined, setUnderlined] = useState(true)

    const onHRefChange = (event) => {
        setHRef(event.target.value)
    }
    const onTextChange = (event) => {
        setText(event.target.value)
    }
    const onUnderlinedChange = (event) => {
        setUnderlined(event.target.checked)
    }
    return (
        <>
            <h3>Point 4</h3>
            <label className={styles.label}>href:<input type="text" className={styles.input} onChange={onHRefChange} value={href}/></label>
            <label className={styles.label}>Text:<input type="text" className={styles.input} onChange={onTextChange} value={text} /></label>
            <label className={styles.label}><input type="checkbox" onChange={onUnderlinedChange} checked={underlined} />Underlined</label>
            <div className={styles.link}>
                <Link href={href} text={text} isUnderlined={underlined}></Link>
            </div>
        </>
    )
}

export default Points44
