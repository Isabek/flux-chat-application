/**
 * @jsx React.DOM
 */
var React = require("react");
var ThreadSection = require("../components/ThreadSection");

var ChatApp = React.createClass({
    render: function () {
        return (
            <div className="chat-application">
                <ThreadSection/>
            </div>
            );
    }
});

module.exports = ChatApp;