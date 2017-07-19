/**
 * Created by uladzimir on 11.7.17.
 */
define(['../Appender'], function (Appender) {
    function WindowAppender(idWindow) {
        this.logWindow = document.getElementById(idWindow);
    }

    WindowAppender.prototype = Object.create(Appender.prototype);


    WindowAppender.prototype.sendMessage =  function (msg, level) {
        var span = document.createElement("span");
        span.style.color = level.color;
        span.style.display = "block";
        span.innerHTML = msg;
        this.logWindow.appendChild(span);
    };

    return WindowAppender;
});