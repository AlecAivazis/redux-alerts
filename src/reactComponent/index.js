// third party imports
import React from 'react'
// local imports
import Alert from './Alert'
import removeFirstAlert from 'actions/pop_alert'
import Timer from './Timer'
import UList from './UList'


/**
 * This component manages a list of flash messages which are displayed
 * for a particular amount of time.
 */
@quickConnect('alerts')
class AlertContainer extends React.Component {

    static propTypes = {
        duration: React.PropTypes.number,
        dispatch: React.PropTypes.func.isRequired,
    }

    static defaultProps = {
        duration: 4000,
    }

    constructor(props, ...args) {
        // instantiate this
        super(props, ...args)
        // bind various functions
        this.popMessage = this.popMessage.bind(this)
        // set the initial state
        this.state = {
            // the timer should start off active if there are already alerts to show
            isTimerActive: props.alerts.length > 0,
        }
    }

    /**
     * This function removes the first message from the list
     */
    popMessage() {
        // call the appropriate action on the redux store
        this.props.dispatch(removeFirstAlert())
    }


    /**
     * Called when the component recieves new props.
     * In this case it's when a new alert messages has been added (or removed).
     */
    componentWillReceiveProps({alerts}) {
        // make sure the timer is active
        this.setState({
            isTimerActive: alerts.length > 0,
        })
    }

    render () {
        // grab the usud props
        const {
            style,
            duration,
            alerts,
            ...unusedProps,
        } = this.props

        return (
            <UList
                style={{
                    ...styles.container,
                    ...style,
                }}
                {...unusedProps}
            >
                {this.state.isTimerActive
                    && <Timer tick={this.popMessage} interval={duration} />}
                {
                    alerts.slice(0, 5).map((message, index) =>
                        <FlashMessage
                            key={index}
                            {...message}
                        />
                    )
                }
            </UList>
        )
    }
}

const styles = {
    container: {
        position: 'fixed',
        top: 20,
        right: 20,
        width: 300,
        zIndex: 99,
    },
}

export default AlertContainer
