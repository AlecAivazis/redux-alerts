// local imports
import {alert_success, push_message} from '../constants'


export default ({status = alert_success, body}) => {
    return {
        type: push_message,
        payload: {
            body,
            status,
        },
    }
}
