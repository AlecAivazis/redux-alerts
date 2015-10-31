// local imports
import {pop_alert, push_alert} from './constants'


/**
 * This reducer manages the queue of flash alert
 */
export default (state = [], {type, payload}) => {
    // if we need to push a alert to the queue
    if (type === push_alert) {
        // add the payload to the state queue
        return [...state, payload]
    // otherwise if we need to remove an alert from the queue
    } else if (type === pop_alert) {
        // remove the first item from the queue
        return state.slice(1)
    }
    // otherwise its an action we dont recognize
    // return the previous state
    return state
}
