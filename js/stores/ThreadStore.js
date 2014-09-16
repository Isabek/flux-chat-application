var ChatAppDispatcher = require("../dispatcher/ChatAppDispatcher"),
    ChatConstants = require("../constants/ChatConstants"),
    EventEmitter = require("events").EventEmitter,
    merge = require("react/lib/merge");

var ActionTypes = ChatConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _currentId = null;
var _threads = {};

var ThreadStore = merge(EventEmitter.prototype, {
    init: function (rawMessages) {

    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function () {

    },
    removeChangeListener: function () {

    },
    get: function (id) {
        return _threads[id];
    },
    getAll: function () {
        return _threads;
    },
    getCurrentId: function () {
        return _currentId;
    }
});

ThreadStore.dispatchToken = ChatAppDispatcher.register(function (payload) {

    var action = payload.action;

    switch (action.type) {
        case ActionTypes.CLICK_THREAD:
            _currentId = action.threadId;
            _threads[_currentId].lastMessage.isRead = true;
            ThreadStore.emitChange();
            break;
        case ActionTypes.RECEIVE_RAW_MESSAGES:
            ThreadStore.init(action.rawMessages);
            ThreadStore.emitChange();
            break;
        default:
    }
});

module.exports = ThreadStore;