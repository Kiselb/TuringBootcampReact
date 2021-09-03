import React, { useState } from 'react'

import SmartButton from '../components/SmartButton/SmartButton'
import styles from './points66.module.css'

const Points66 = () => {

    const [isButton, setIsButton] = useState(true)

    const onIsButtonChange = (event) => {
        setIsButton(event.target.checked)
    }
    const onClickButton = () => {
        alert('Button clicked')
    }
    return (
        <>
            <h3>Point 6</h3>
            <label className={styles.label}><input type="checkbox" onChange={onIsButtonChange} checked={isButton} />Is Button</label>
            <div className={styles.smartButton}>
                {(isButton)?(<SmartButton isButton={isButton} params={{ text: "Button", onClick: onClickButton }}></SmartButton>):(<SmartButton isButton={isButton} params={{ href: "https://www.google.com", text: "Google", isUnderlined: true }}></SmartButton>)}
            </div>
        </>
    )
}

export default Points66
