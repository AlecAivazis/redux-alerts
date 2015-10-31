// third party imports
import React, {Component, PropTypes} from 'react'


/**
 * Minimal wrapper over native <ul> and <li> tags.
 */
export default class UnorderedList extends Component {
    static propTypes = {
        style: PropTypes.object,
        listItemStyle: PropTypes.object,
    }


    render() {
        // pull out the used props
        const {listItemStyle, children, ...unusedProps} = this.props

        return (
            <ul {...unusedProps}>
                {React.Children.map(children, (child, key) => (
                    <li
                        style={listItemStyle}
                        key={key}
                    >
                        {child}
                    </li>
                ))}
            </ul>
        )
    }
}


// end of file
