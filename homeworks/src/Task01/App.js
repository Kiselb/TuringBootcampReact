import React from 'react'
import ItemsList from './ItemsList'
import { v4 as uuidv4} from 'uuid'

function App() {

    const [items, setItems] = React.useState([
        { text: 'Text ' + 1, uuid: uuidv4(), selected: false },
        { text: 'Text ' + 2, uuid: uuidv4(), selected: false },
        { text: 'Text ' + 3, uuid: uuidv4(), selected: false },
        { text: 'Text ' + 4, uuid: uuidv4(), selected: false },
        { text: 'Text ' + 5, uuid: uuidv4(), selected: false }
    ])

    function getIndexSelected() {
        let index = -1

        for(let i = 0; i < items.length; i++) {
            if (items[i].selected) {
                index = i
                break;
            }
        }
        return index
    }
    function onToggle(event, uuid) {
        setItems(
            items.map(item => {
                if (item.uuid !== uuid) {
                    item.selected = false
                } else {
                    item.selected = !item.selected
                }
                return item
            })
        )
    }
    function addOnTop() {
        const text = prompt('Введите текст элемента')
        if (text.trim().length > 0) {
            setItems(
                [{text: text, uuid: uuidv4(), selected: false}, ...items]
            )
        }
    }
    function addToBottom() {
        const text = prompt('Введите текст элемента')
        if (text.trim().length > 0) {
            setItems(
                [...items, {text: text, uuid: uuidv4(), selected: false}]
            )
        }
    }
    function addBellow() {
        const index = getIndexSelected()
        if (index < 0) return

        const text = prompt('Введите текст элемента')

        if (text.trim().length > 0) {
            setItems(
                [...items.slice(0, index + 1), {text: text, uuid: uuidv4(), selected: false}, ...items.slice(index + 1)]
            )
        }
    }
    function removeTop() {
        setItems(
            items.slice(1)
        )
    }
    function removeBottom() {
        setItems(
            items.slice(0, -1)
        )
    }
    function removeSelected() {
        const index = getIndexSelected()
        if (index < 0) return

        setItems([...items.slice(0, index), ...items.slice(index + 1)])
    }
    return (
        <div className='wrapper'>
            <h1>Turing Bootcamp React Course Task #1</h1>
            <button className='action' onClick={addOnTop}>Добавить в начало</button>
            <button className='action' onClick={addBellow}>Добавить после отмеченного</button>
            <button className='action' onClick={addToBottom}>Добавить в конец</button>
            <button className='action' onClick={removeTop}>Удалить первый</button>
            <button className='action' onClick={removeSelected}>Удалить отмеченный</button>
            <button className='action' onClick={removeBottom}>Удалить последний</button>
            <ItemsList items={items} onToggle={onToggle}></ItemsList>
        </div>
    )
}

export default App;
