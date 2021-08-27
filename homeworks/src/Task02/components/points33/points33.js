import React, { useState } from 'react'
import styles from './points33.module.css'

export default function Points33() {
    const [term1, setTerm1] = useState(0)
    const [term2, setTerm2] = useState(0)

    const handlerTerm1 = (event) => {
        setTerm1(Number(event.target.value))
    }
    const handlerTerm2 = (event) => {
        setTerm2(Number(event.target.value))
    }
    const showResult = () => {
        if (!isNaN(term1) && !isNaN(term2)) { // Для Chrome проверка на NaN излишняя - при вводе числа больше/меньше допустимого, значение в Input сбрасывается в 0
            alert(term1 + term2)
            setTerm1(0)
            setTerm2(0)
        } else {
            alert("Invalid operands")
        }
    }
    return (
        <>
            <h3>Point 3 of task 2</h3>
            <p>Enter operands:</p>
            <input className={styles.input} type="number" name="term1" value={term1} onChange={handlerTerm1} />
            <input className={styles.input} type="number" name="term2" value={term2} onChange={handlerTerm2} />
            <button className={styles.button} onClick={showResult}>Show add result</button>
        </>
    )
}
