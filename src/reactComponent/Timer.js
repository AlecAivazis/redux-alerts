// third party imports
import React from 'react'

class Timer extends React.Component {

    static defaultProps = {
        interval: 500,
        type: 'repeated',
    }

    static propTypes = {
        interval: React.PropTypes.number,
        tick: React.PropTypes.func.isRequired,
        type: React.PropTypes.oneOf(['single', 'repeated']),
    }

    componentDidMount() {
        // grab the used props
        const {interval, type, tick} = this.props

        // if a repeated interval was specified
        if (type === 'repeated') {
            // create the timer
            this.interval = setInterval(tick, interval)
        // otherwise if the timer should only fire once
        } else if (type === 'single') {
            // create the timeout
            // note: interval is interpretted as a delay
            this.timeout = setTimeout(tick, interval)
        }
    }


    componentWillUnmount() {
        // if there is a timeout
        if (typeof this.interval !== 'undefined') {
            // clear the interval
            clearInterval(this.interval)
        } else if (typeof this.timeout !== 'undefined') {
            // clear the timeout
            clearTimeout(this.timeout)
        }
    }


    render() {
        return <div {...this.props} />
    }
}

export default Timer
