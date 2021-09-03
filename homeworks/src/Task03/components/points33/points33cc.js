import React from 'react'

import styles from './points33.module.css'
import { METRICS, METRICS_HEIGHT_DEFAULT, METRICS_FONT_DEFAULT } from './constants'

class Points33CC extends React.Component {
    state = { value: 0 }

    constructor(props) {
        super(props)
        this.containergRef = React.createRef()
        this.setMetics = this.setMetics.bind(this)
    }
    setMetics(event) {
        (!!this.containergRef.current) && (this.containergRef.current.style.height = METRICS[+event.target.value]?.height || METRICS_HEIGHT_DEFAULT);
        (!!this.containergRef.current) && (this.containergRef.current.style.fontSize = METRICS[+event.target.value]?.font || METRICS_FONT_DEFAULT);
        (!!this.containergRef.current) && this.setState({ value: +event.target.value });
    }
    render() {
        return (
            <>
                <h3>Point 3 class component</h3>
                <label>Container height:<select className={styles.sizes} value={this.state.value} onChange={this.setMetics}>
                    <option value="0">100px</option>
                    <option value="1">200px</option>
                    <option value="2">300px</option>
                </select></label>
                <div className={styles.container} ref={this.containergRef}>
                    <div className={styles.post}>
                        Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
                    </div>
                    <div className={styles.post}>
                        Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
                    </div>
                    <div className={styles.post}>
                        Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
                    </div>
                    <div className={styles.post}>
                        Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
                    </div>
                    <div className={styles.post}>
                        Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
                    </div>
                    <div className={styles.post}>
                        Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
                    </div>
                </div>
            </>
        )
    }
}

export default Points33CC
