var Dispatcher = require("flux").Dispatcher;
var ChatConstants = require("../constants/ChatConstants");
var copyProperties = require("react/lib/copyProperties")

var PayloadSources = ChatConstants.PayloadSources;

var ChatAppDispatcher = copyProperties(new Dispatcher(), {
    handleServerAction: function (action) {
        var payload = {
            source: PayloadSources.SERVER_ACTION,
            action: action
        };

        this.dispatch(payload);
    },
    handleViewAction: function (action) {
        var payload = {
            source: PayloadSources.VIEW_ACTION,
            action: action
        };

        this.dispatch(payload);
    }

});

module.exports = ChatAppDispatcher;