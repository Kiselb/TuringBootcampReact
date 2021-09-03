import React from 'react'

import styles from './points11.module.css'
import Image from '../components/Image/image'

const Points11 = () => {
    const [src, setSrc] = React.useState('https://images.freeimages.com/images/large-previews/2fe/butterfly-1390152.jpg')
    const [width, setWidth] = React.useState(100)
    const [height, setHeight] = React.useState(100)

    const onSrcChange = (event) => {
        (!!(event.target.value.trim())) && setSrc(event.target.value.trim())
    }
    const onHeightChange = (event) => {
        (!!event.target.value) && setHeight(+event.target.value)
    }
    const onWidthChange = (event) => {
        (!!event.target.value) && setWidth(+event.target.value)
    }
    return (
        <>
            <h3>Point #1</h3>
            <label className={styles.label}>Width:<input type="number" className={styles.input} onChange={onWidthChange} value={width}/></label>
            <label className={styles.label}>Height:<input type="number" className={styles.input} onChange={onHeightChange} value={height} /></label>
            <label className={styles.label}>Source:<input type="text" className={styles.input} onChange={onSrcChange} value={src} /></label>
            <div className={styles.img}>
                <Image src={src} width={width} height={height}></Image>
            </div>
        </>
    )
}

export default Points11
