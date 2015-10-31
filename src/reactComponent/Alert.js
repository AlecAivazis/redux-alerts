// third party imports
import React from 'react'
// local imports
import {
    alert_success,
    alert_error,
    alert_info,
} from '../constants'

class Alert extends React.Component {

    render() {
        // grab the used props
        const {style, body, status, ...unusedProps} = this.props

        // render the flash message with the appropriate style
        return (
            <div
                style={{
                    ...(styles[status] || styles.baseMessageStyle),
                    ...style,
                }}
                {...unusedProps}
            >
                {body}
            </div>
        )
    }
}

const baseMessageStyle = {
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    boxShadow: '4px 4px 11px 0px #ACA4A2',
}

const styles = {
    baseMessageStyle,
    [alert_success]: {
        ...baseMessageStyle,
        backgroundColor: '#DDF0D4',
        color: '#3C5F2D',
    },
    [alert_error]: {
        ...baseMessageStyle,
        backgroundColor: '#C6554B',
        color: '#5B2722',
    },
    [alert_info]: {
        ...baseMessageStyle,
        backgroundColor: '#ACCFE8',
        color: '#405877',
    },
}

export default Alert
