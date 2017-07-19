/**
 * Created by uladzimir on 11.7.17.
 */
define(
    ['./Appender',
        './appenders/AlertAppender',
        './appenders/ConsoleAppender',
        './appenders/WindowAppender',
        './appenders/EndPointAppender'],
    function (Appender, AlertAppender, ConsoleAppender, WindowAppender, EndPointAppender) {

        function isFunction(func){
            var getType = {};
            return func && getType.toString.call(func) === '[object Function]';
        }

        function Logger() {
            this.appenders = [new Logger.prototype.CONSOLE_APPENDER()];
            this.formatMessageHandler = Logger.prototype.defaultFormatMessageHandler;


            // catch a unhandled exception
            window.onerror = this.unhandledUserException.bind(this);
        }

        Logger.prototype = {

            defaultFormatMessageHandler: function (level, message) {
                return level.toUpperCase() + " [ " + this.getFormatDate() + " ] " + message;
            },

            getFormatDate: function () {
                var date = new Date();
                return date.getHours() + ":" + date.getMinutes() + " " +
                    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
            },

            /*
             After initializing Logger you can add an appender
             which can be a build-in appender or a custom appender
             which extends Appender and override a method "sendMethod".
             Pay attention that if you forget to override this method
             during an invocation it will throw Exception
             */
            addAppender: function (appender) {
                if (appender instanceof Appender) {
                    this.appenders.push(appender);
                } else {
                    throw new Error(
                        "You are trying to add an invalid Appender. " +
                        "You have to make sure that custom appender extends Appender from this library. " +
                        "You can use special function \"extendsAppender\"  ");
                }
            },

            setAppenders: function (appender) {
                if (Array.isArray(appender)) {
                    for (var i in appender) {
                        this.addAppender(appender);
                    }
                } else {
                    this.addAppender(appender);
                }
            },


            setFormatMessageHandler: function (handler) {
                if (isFunction(handler)){
                    this.formatMessageHandler = handler;
                } else{
                    throw new Error("FormatMessageHandler must be function");
                }
            },

            extendsAppender: function(customAppender){
                customAppender.prototype = Object.create(Appender.prototype);
                return customAppender;
            },

            unhandledUserException: function (msg, url, line) {
                var message = "Unhandled user exception which occurs in (" + (url || window.location) + ") on line " + line + " with message (" + msg + ")";
                this.log(this.ERROR, message);
                // interrupt to invoke a default method
                return true;
            },

            // Logging levels
            DEBUG: {
                name: "DEBUG",
                color: "#4b5257"
            },
            INFO: {
                name: "INFO",
                color: "#31b0d5"
            },
            WARN: {
                name: "WARN",
                color: "#f0ad4e"
            },
            ERROR: {
                name: "ERROR",
                color: "#d9534f"
            },


            // Constructors of build-in appenders
            CONSOLE_APPENDER: ConsoleAppender,
            ALERT_APPENDER: AlertAppender,
            WINDOW_APPENDER: WindowAppender,
            ENDPOINT_APPENDER: EndPointAppender,

            log: function (level, msg) {
                for (var i in this.appenders) {
                    this.appenders[i].sendMessage(this.formatMessageHandler(level.name, msg), level);
                }
            },

            debug: function (msg) {
                this.log(this.DEBUG, msg);
            },
            info: function (msg) {
                this.log(this.INFO, msg);
            },
            warn: function (msg) {
                this.log(this.WARN, msg);
            },
            error: function (msg) {
                this.log(this.ERROR, msg);
            }
        };


        return Logger;

    });



