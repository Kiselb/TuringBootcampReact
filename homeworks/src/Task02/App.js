import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Points11 from './components/points11/points11'
import Points22 from './components/points22/points22'
import Points33 from './components/points33/points33'
import Points45 from './components/points45/points45'
import Points66 from './components/points66/points66'
import Points77 from './components/points77/points77'
import Points88 from './components/points88/points88'
import Points99 from './components/points99/points99'

export default function App() {
    return (
        <Router>
            <div className='wrapper'>
                <h1>Turing Bootcamp React Course Task #2</h1>
                <nav>
                    <Link to="/points11">Point #1</Link>
                    <Link to="/points22">Point #2</Link>
                    <Link to="/points33">Point #3</Link>
                    <Link to="/points45">Points #4-5</Link>
                    <Link to="/points66">Point #6</Link>
                    <Link to="/points77">Point #7</Link>
                    <Link to="/points88">Point #8</Link>
                    <Link to="/points99">Point #9</Link>
                </nav>
                <Switch>
                    <Route path="/points11"><Points11 /></Route>
                    <Route path="/points22"><Points22 /></Route>
                    <Route path="/points33"><Points33 /></Route>
                    <Route path="/points45"><Points45 /></Route>
                    <Route path="/points66"><Points66 /></Route>
                    <Route path="/points77"><Points77 /></Route>
                    <Route path="/points88"><Points88 /></Route>
                    <Route path="/points99"><Points99 /></Route>
                </Switch>
            </div>
        </Router>
    )
}
