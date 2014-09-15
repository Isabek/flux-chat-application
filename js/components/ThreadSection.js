/**
 * @jsx React.DOM
 */

var React = require("react");

var ThreadSection = React.createClass({
    render: function () {
        return (
            <div className="thread-section">
                <div className="thread-unread-count">
                Unread
                </div>
                <ul className="thread-list">
                    <li className="thread-list-item">
                        <h5 className="thread-name">User Users</h5>
                        <div className="thread-time">18:45 AM</div>
                        <div className="thread-last-message">sadasdasd</div>
                    </li>
                </ul>
            </div>
            );
    }
});

module.exports = ThreadSection;