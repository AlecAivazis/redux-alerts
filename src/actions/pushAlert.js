// local imports
import {alert_success, push_alert} from '../constants'


export default ({status = alert_success, body}) => {
    return {
        type: push_alert,
        payload: {
            body,
            status,
        },
    }
}
