/**
 * @jsx React.DOM
 */

var React = require("react"),
    ChatApp = require("./components/ChatApp.react");

React.renderComponent(<ChatApp/>, document.getElementById('chat-application'));