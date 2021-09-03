import React from 'react'
import styles from './points12.module.css'

const MAGIC_SENTENCE = 'Hello world!'
const MAGIC_ACTION = 'blur(1px)'

class Points12CC extends React.Component {
    state = { value: '' }
    constructor(props) {
        super(props)
        this.focusingRef = React.createRef()
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnClick = this.handleOnClick.bind(this)
    }
    handleOnChange(event) {
        (!!this.focusingRef.current) && ((text) => { this.focusingRef.current.style.filter = (text === MAGIC_SENTENCE)? (MAGIC_ACTION): ("") })(event.target.value);
        (!!this.focusingRef.current) && this.setState({ value: event.target.value });
    }
    handleOnClick() {
        !!this.focusingRef.current && this.focusingRef.current.focus()
    }
    render() {
        return (
            <>
                <h3>Points 1-2 class component</h3>
                <input className={styles.input} type="text" ref={this.focusingRef} onChange={this.handleOnChange} value={this.state.value}/>
                <button className={styles.button} onClick={this.handleOnClick}>Set focus</button>
            </>
        )
    }
}

export default Points12CC
