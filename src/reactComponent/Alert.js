// third party imports
import React from 'react'
// local imports
import colors from 'colors'
import {
    alert_success,
    alert_error,
    alert_info,
} from './constants'

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
    boxShadow: `4px 4px 11px 0px ${colors.AlertContainerShadow}`,
}

const styles = {
    baseMessageStyle,
    [alert_success]: {
        ...baseMessageStyle,
        backgroundColor: colors.AlertSuccesBackground,
        color: colors.AlertSuccesFontColor,
    },
    [alert_error]: {
        ...baseMessageStyle,
        backgroundColor: colors.AlertErrorBackground,
        color: colors.AlertErrorFontColor,
    },
    [alert_info]: {
        ...baseMessageStyle,
        backgroundColor: colors.AlertAlertBackground,
        color: colors.AlertAlertFontColor,
    },
}

export default Alert
