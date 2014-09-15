/**
 * @jsx React.DOM
 */

var React = require("react"),
    ReactPropTypes = React.PropTypes;

var ThreadListItem = React.createClass({
    propTypes: {
        thread: ReactPropTypes.object,
        currentThreadId: ReactPropTypes.string()
    },
    render: function () {

        var thread = this.props.thread;
        var lastMessage = thread.lastMessage;

        var cx = React.addons.classSet;
        var classes = cx({
            'thread-list-item': true,
            'active': ''
        });

        return (
            <li className="thread-list-item">
                <h5 className="thread-name">User Users</h5>
                <div className="thread-time">18:45 AM</div>
                <div className="thread-last-message">sadasdasd</div>
            </li>
            );
    }
});

module.exports = ThreadListItem;