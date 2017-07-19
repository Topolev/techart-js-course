define(['../logger/Logger', '../logger/Appender'], function (Logger) {

    var Logger = new Logger();
    
    Logger.addAppender(new Logger.CONSOLE_APPENDER());
    Logger.addAppender(new Logger.ALERT_APPENDER());
    Logger.addAppender(new Logger.WINDOW_APPENDER("error"));
    Logger.addAppender(new Logger.ENDPOINT_APPENDER("http://localhost:8000/sendLog"));


    Logger.log(Logger.DEBUG, "test");
    Logger.log(Logger.INFO, "test2");
    Logger.info("test3");


    // Attempting to create an invalid formatMessageHandler
    try {
        Logger.setFormatMessageHandler("string");
    } catch (e) {
        console.log("You are tring create an invalid format message handler:", e)
    }

    // Assign new format message handler
    Logger.setFormatMessageHandler(function (level, message) {
        return "We change formatHandler: " + level.toUpperCase() + message;
    });
    Logger.info("test3");


    // Create and assign a custom appender
    function CustomAppender() {
        this.sendMessage = function (msg) {
            console.log("From custom handler: " + msg);
        }
    }


    // Attempting to create an invalid custom appender
    try {
        Logger.setAppenders(Logger.extendsAppender(new CustomAppender()));
    } catch (e) {
        console.log("You are trying to assign an invalid custom appender", e)
    }

    Logger.extendsAppender(CustomAppender);

    Logger.setAppenders(Logger.extendsAppender(new CustomAppender()));
    Logger.info("test3");


    throw new Error("Unhandled user exception");

})



