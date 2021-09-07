import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Points22 from './pages/points22'

const App = () => {
    // Обязательно нужно создать стэйт
    const [todo, setTodo] = useState([])

    // Функция, которая загружает todo list
    const loadTodo = async () => {
        // Напишите код, который загружает данные с сервера
        try {
            setTodo(await (await fetch('https://jsonplaceholder.typicode.com/todos')).json())
        } catch(exception) {
            console.log(exception)
        }
    }

    // Поскольку загрузка - побочный эффект, загрузку выполняем
    // в useEffect
    useEffect(() => {
        loadTodo();
    }, [])

    return (
        // Напишите функцию рендера
        <Router>
            <div className='wrapper'>
                <h1>Turing Bootcamp React Course Task #19</h1>
                <nav className='nav'>
                    <Link to="/points11">ToDo List</Link>
                    <Link to="/points22">Point #2</Link>
                </nav>
                <Switch>
                    <Route path="/points11">
                        <div>
                            {todo.map(todo => <div key={todo.id}><span>{todo.id}</span><input type="checkbox" checked={todo.completed} readOnly /><span>{todo.title}</span></div>)}
                        </div>
                    </Route>
                    <Route path="/points22"><Points22 /></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
