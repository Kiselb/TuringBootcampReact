import React from 'react'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        border: '1px solid #ececec',
        marginBottom: '0.5rem'
    },
    input: {
        marginRight: '0.5rem'
    }
}
export default function Item(props) {
    return (
        <li style={styles.li} key={props.uuid}>
            <span>
                <input style={styles.input} type='checkbox' onChange={(event) => props.onToggle(event, props.uuid)} checked={props.selected}/>
                {props.text}
            </span>
            <button onClick={() => alert(props.text)}>Текст</button>
        </li>
    )
}
