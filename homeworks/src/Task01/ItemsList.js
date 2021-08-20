import React from 'react'
import Item from './Item'


const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function ItemsList(props) {
    return (
        <ul style={styles.ul}>
            {props.items.map((item) => {
                return (
                    <Item text={item.text} key={item.uuid} uuid={item.uuid} selected={item.selected} onToggle={props.onToggle}></Item>
                )
            })}
        </ul>
    )
}
