import React from 'react'
import styles from './points12.module.css'

const MAGIC_SENTENCE = 'Hello world!'
const MAGIC_ACTION = 'blur(1px)'

const Point12FC = () => {
    const [value, setValue] = React.useState('')
    const refFocusing = React.useRef(null)

    const setFocus = () => (!!refFocusing.current && refFocusing.current.focus())

    const handleOnChange = (event) => {
        (!!refFocusing.current) && (text => refFocusing.current.style.filter = (text === MAGIC_SENTENCE)? (MAGIC_ACTION): (""))(event.target.value);
        (!!refFocusing.current) && setValue(event.target.value);
    }
    return (
        <>
            <h3>Points 1-2 functional component</h3>
            <input className={styles.input} type="text" ref={refFocusing} onChange={handleOnChange} value={value}/>
            <button className={styles.button} onClick={setFocus}>Set focus</button>
        </>
    )
}
export default Point12FC
