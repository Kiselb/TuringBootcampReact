import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Points12FC from './components/points12/points12fc'
import Points12CC from './components/points12/points12cc'
import Points33FC from './components/points33/points33fc'
import Points33CC from './components/points33/points33cc'
import Points44FC from './components/points44/points44fc'
import Points44CC from './components/points44/points44cc'

export default function App() {
    return (
        <Router>
            <div className='wrapper'>
                <h1>Turing Bootcamp React Course Week 6 Day 1</h1>
                <nav>
                    <Link to="/point1">Points #1-2 FC</Link>
                    <Link to="/point2">Points #1-2 CC</Link>
                    <Link to="/point3">Point #3 FC</Link>
                    <Link to="/point4">Point #3 CC</Link>
                    <Link to="/point5">Point #4 FC</Link>
                    <Link to="/point6">Point #4 CC</Link>
                </nav>
                <Switch>
                    <Route path="/point1"><Points12FC /></Route>
                    <Route path="/point2"><Points12CC /></Route>
                    <Route path="/point3"><Points33FC /></Route>
                    <Route path="/point4"><Points33CC /></Route>
                    <Route path="/point5"><Points44FC /></Route>
                    <Route path="/point6"><Points44CC /></Route>
                </Switch>
            </div>
        </Router>
    )
}
