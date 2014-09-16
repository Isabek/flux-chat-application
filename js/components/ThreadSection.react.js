/**
 * @jsx React.DOM
 */

var React = require("react"),
    ThreadListItem = require("./ThreadListItem.react"),
    ThreadsStore = require("../stores/ThreadStore");

function getThreadsFromStore() {
    return {
        threads: ThreadsStore.getAll(),
        currentThreadId: ThreadsStore.getCurrentId()
    };
}

var ThreadSection = React.createClass({
    getInitialState: function () {
        return getThreadsFromStore();
    },
    componentDidMount: function () {

    },
    componentWillUnmount: function () {

    },
    render: function () {

        var threadListItems = this.state.threads.map(function (thread) {
            return (
                <ThreadListItem
                    thread={thread}
                />
                );
        });


        return (
            <div className="thread-section">
                <div className="thread-unread-count">
                Unread
                </div>
                <ul className="thread-list">
                    {threadListItems}
                </ul>
            </div>
            );
    }
});

module.exports = ThreadSection;