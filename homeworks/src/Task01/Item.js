import React from 'react'

export default function Item({ text, uuid, selected, onToggle}) {
    const showText = () => alert(text)
    return (
        <li key={uuid}>
            <span>
                <input type='checkbox' onChange={(event) => onToggle(event, uuid)} checked={selected}/>
                {text}
            </span>
            <button onClick={showText}>Текст</button>
        </li>
    )
}
