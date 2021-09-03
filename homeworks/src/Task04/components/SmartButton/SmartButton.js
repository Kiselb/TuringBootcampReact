import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/button'
import Link from '../Link/link'

const SmartButton = ({ isButton, params}) => {

    return (
        <>
            {(isButton)? (<Button text={params.text} onClick={params.onClick}></Button>): (<Link href={params.href} text={params.text} isUnderlined={params.isUnderlined}></Link>)}
        </>
    )

}

export default SmartButton

SmartButton.propsTypes = {
    isButton: PropTypes.bool.isRequired,
    params: PropTypes.oneOfType(
        [
            PropTypes.shape({
                text: PropTypes.string.isRequired,
                onClick: PropTypes.func.isRequired
            }),
            PropTypes.shape({
                href: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
                isUnderlined: PropTypes.bool.isRequired
            })
        ]
    ).isRequired
}
//
// Рассматривался и такой вариант
//
// const isButtonValid = function(props, propName, componentName) {
//     if (props["isButton"]) {
//         if (!props["propName"].text || !props["propName"].onClick) {
//             return new Error(`Invalid prop ${propName} passed to ${componentName}`);
//         }
//     }
// }
// const isLinkValid = function(props, propName, componentName) {
//     if (!props["isButton"]) {
//         if (!props["propName"].href || !props["propName"].text || !props["propName"].isUnderlined) {
//             return new Error(`Invalid prop ${propName} passed to ${componentName}`);
//         }
//     }
// }
// SmartButton.propsTypes = {
//     isButton: PropTypes.bool.isRequired,
//     button: isButtonValid,
//     link: isLinkValid
// }
