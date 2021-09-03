import React, { useState } from 'react'

import styles from './points55.module.css'
import UnorderedList from '../components/UnOrderedList/UnorderedList'

const Points55 = () => {
    const [listItems, setListItems] = useState([])
    const [text, setText] = useState('')
    
    const onItemsListChange = (event) => {
        setText(event.target.value)
        setListItems(event.target.value.split(',').map(item => item.trim()))
    }
    return (
        <>
            <h3>Point 5</h3>
            <label className={styles.label}>Items (coma separated):<input type="text" className={styles.input} onChange={onItemsListChange} value={text}/></label>
            <div className={styles.list}>
                <p>Unsorted List Component:</p>
                <UnorderedList listItems={listItems}></UnorderedList>
            </div>
        </>
    )
}

export default Points55
