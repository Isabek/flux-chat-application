/**
 * @jsx React.DOM
 */
var React = require("react");
var ThreadSection = require("../components/ThreadSection.react");

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