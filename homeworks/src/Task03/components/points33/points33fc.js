import React, { useRef, useState } from 'react'

import styles from './points33.module.css'
import { METRICS, METRICS_HEIGHT_DEFAULT, METRICS_FONT_DEFAULT } from './constants'

const Point33FC = () => {
    const [apperance, setApperance] = useState(0)
    const containergRef = useRef(null)

    const changeApperance = (event) => {
        (!!containergRef.current) && (containergRef.current.style.height = METRICS[+event.target.value]?.height || METRICS_HEIGHT_DEFAULT);
        (!!containergRef.current) && (containergRef.current.style.fontSize = METRICS[+event.target.value]?.font || METRICS_FONT_DEFAULT);
        (!!containergRef.current) && setApperance(event.target.value)
    }

    return (
        <>
            <h3>Point 3 functional component</h3>
            <label>Container height:<select className={styles.sizes} value={apperance} onChange={changeApperance}>
                    <option value="0">100px</option>
                    <option value="1">200px</option>
                    <option value="2">300px</option>
                </select></label>
                <div className={styles.container} ref={containergRef}>
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
export default Point33FC
