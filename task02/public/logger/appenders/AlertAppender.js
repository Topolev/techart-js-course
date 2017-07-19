/**
 * Created by uladzimir on 11.7.17.
 */
define(['../Appender'], function (Appender) {
    function AlertAppender() {
    }

    AlertAppender.prototype = Object.create(Appender.prototype);
    AlertAppender.prototype.sendMessage = function (msg) {
        alert(msg);
    };

    return AlertAppender;
});