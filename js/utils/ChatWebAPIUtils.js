var ChatServerActionCreator = require("../actions/ChatServerActionCreators");


module.exports = {
    getAllMessages: function () {
        var rawMessages = JSON.parse(localStorage.getItem('messages'));
        ChatServerActionCreator.receiveAll(rawMessages);
    },
    createMessage: function (message, threadName) {

        var rawMessages = JSON.parse(localStorage.getItem('messages'));
        var timestamp = Date.now();
        var _id = 'm_' + timestamp;
        var threadId = message.threadID

    }
};