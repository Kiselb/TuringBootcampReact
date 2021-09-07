import React, { useState } from 'react'
import User from '../components/User'

const Points22 = () => {
    const [id, setId] = useState(3)
    const setUserId = (event) => {
        setId(event.target.value)
    }
    return (
        <>
            <input type="number" value={id} onChange={setUserId} />
            <User userId={id}></User>
        </>
    )
}

export default Points22
