/**
 * @jsx React.DOM
 */

var React = require("react"),
    ChatApp = require("./components/ChatApp.react"),
    ChatExampleData = require('./ChatExampleData');

ChatExampleData.init();

React.renderComponent(<ChatApp/>, document.getElementById('chat-application'));