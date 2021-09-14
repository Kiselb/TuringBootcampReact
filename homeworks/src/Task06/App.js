import React from 'react'
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/store'
import LibraryContainer from './components/LibraryContainer/LibraryContainer'

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className='wrapper'>
                    <h1>Turing Bootcamp React Course Task #20</h1>
                    <LibraryContainer></LibraryContainer>
                </div>
            </Router>
        </Provider>
    )
}
