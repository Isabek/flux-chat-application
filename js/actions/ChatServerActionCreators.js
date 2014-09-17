var ChatAppDispatcher = require("../dispatcher/ChatAppDispatcher"),
    ChatConstants = require("../constants/ChatConstants"),
    ActionTypes = ChatConstants.ActionTypes;

module.exports = {
    receiveAll: function (rawMessages) {
        ChatAppDispatcher.handleServerAction({
            type: ActionTypes.RECEIVE_RAW_MESSAGES,
            rawMessages: rawMessages
        });
    },

    receiveCreatedMessage: function (createdMessage) {
        ChatAppDispatcher.handleViewAction({
            type: ActionTypes.RECEIVE_RAW_CREATED_MESSAGE,
            rawMessage: createdMessage
        });
    }
};