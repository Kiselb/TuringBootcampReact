import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Points11 from './pages/points11'
import Points22 from './pages/points22'
import Points33 from './pages/points33'
import Points44 from './pages/points44'
import Points55 from './pages/points55'
import Points66 from './pages/points66'

export default function App() {
    return (
        <Router>
            <div className='wrapper'>
                <h1>Turing Bootcamp React Course Week 7 Day 3</h1>
                <nav>
                    <Link to="/points11">Point #1</Link>
                    <Link to="/points22">Point #2</Link>
                    <Link to="/points33">Point #3</Link>
                    <Link to="/points44">Point #4</Link>
                    <Link to="/points55">Point #5</Link>
                    <Link to="/points66">Point #6</Link>
                </nav>
                <Switch>
                    <Route path="/points11"><Points11 /></Route>
                    <Route path="/points22"><Points22 /></Route>
                    <Route path="/points33"><Points33 /></Route>
                    <Route path="/points44"><Points44 /></Route>
                    <Route path="/points55"><Points55 /></Route>
                    <Route path="/points66"><Points66 /></Route>
                </Switch>
            </div>
        </Router>
    )
}
