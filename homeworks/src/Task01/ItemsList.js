import React from 'react'
import Item from './Item'


const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function ItemsList({items, onToggle}) {
    return (
        <ul style={styles.ul}>
            {items.map((item) => {
                return (
                    <Item text={item.text} key={item.uuid} uuid={item.uuid} selected={item.selected} onToggle={onToggle}></Item>
                )
            })}
        </ul>
    )
}
