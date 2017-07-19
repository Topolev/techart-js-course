/**
 * Created by uladzimir on 11.7.17.
 */
define(function () {
    function Appender() {}

    Appender.prototype = {
        sendMessage: function (msg, level) {
            throw "You have to override the method \"sendMessage\" for an appender: " + this;
        },
        constructor: Appender
    };

    return Appender;
});