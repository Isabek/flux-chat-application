/**
 * @jsx React.DOM
 */

var React = require("react"),
    ReactPropTypes = React.PropTypes;

var ThreadListItem = React.createClass({
    propTypes: {
        thread: ReactPropTypes.object,
        currentThreadId: ReactPropTypes.string
    },
    render: function () {

        var thread = this.props.thread;

        var cx = React.addons.classSet;
        var classes = cx({
            'thread-list-item': true
        });

        return (
            <li className="thread-list-item">
                <h5 className="thread-name">{thread.name}</h5>
                <div className="thread-time">{thread.lastMessage.date.toLocaleTimeString()}</div>
                <div className="thread-last-message">{thread.lastMessage.text}</div>
            </li>
            );
    }
});

module.exports = ThreadListItem;