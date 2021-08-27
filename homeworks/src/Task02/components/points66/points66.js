import React, { useState } from 'react'
import styles from './points66.module.css'

export default function Points66() {
    const [message, setMessage] = useState('')
    const hideMessage = () => {
        setMessage('')
    }
    const authenticate = (event) => {
        event.preventDefault()

        const userName = event.target.username.value
        const userPassword = event.target.userpassword.value
        if (userName === 'Admin' && userPassword === '!@#$%^&*()_+') {
            alert('You successfully authenticated!')
        } else {
            setMessage('Invalid name or password')
        }
    }
    return (
        <>
            <h3>Point 6 of task 2</h3>
            <form onSubmit={authenticate}>
                <input className={styles.input} type="text" name="username" onChange={hideMessage}/>
                <input className={styles.input} type="password" name="userpassword" onChange={hideMessage} />
                <button className={styles.button}>Sign In</button>
                <p name="result">{message}</p>
            </form>
        </>
    )
}
