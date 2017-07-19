/**
 * Created by uladzimir on 11.7.17.
 */
define(['../Appender'], function (Appender) {
    function ConsoleAppender() {
    }

    ConsoleAppender.prototype = Object.create(Appender.prototype);


    ConsoleAppender.prototype.sendMessage =  function (msg, level) {
        console.log('%c' + msg, 'color:' + level.color +';');
    };

    return ConsoleAppender;
});