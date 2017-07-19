# Pre-install tools:
* nodeJS (v.4.2.6)
* npm (v.3.5.2)

# To launch application
* `npm install` - only before the first launching
*  `npm start`

An application will be available on: `http://localhost:8000`

#How to use library
### 1. Initialization
You have to create an instance of `Logger`. 
   During initialization DefaultFormatMessageHandler and one of the build-in appender (ConsoleAppender) will be set.
```
var logger = new Logger();
```
### 2. Setting new appenders
There are 4 build-in appender which you can use already. 
Each appender is a constructor because some of them need extra information, for example for ENDPOINT_APPENDER (we have to pass url od endpoint)
> AVAILABLE BUILD-IN APPENDERS:
> * CONSOLE_APPENDER
> * ALERT_APPENDER
> * WINDOW_APPENDER
> * ENDPOINT_APPENDER

If you would like to set new appenders we can use the following methods:
```
logger.addAppender(new CONSOLE.APPENDER());
logger.setAppenders([new ALERT_APPENDER(), new ENDPOINT_APPENDER("localhost:8080/getMessage")])
```

Also you can create your appender, but your appender have to extends Appender function (included with this library). 
It's required because during setting this appender we check out this and exception will be thrown if you don't complete this. 
For this aims we create a convenient method which is included in Logger prototype `extendsAppender`:
```
    function CustomAppender() {
        this.sendMessage = function (msg) {
            console.log("From custom handler: " + msg);
        }
    }
    
    Logger.extendsAppender(CustomAppender);
    Logger.addAppender(new CustomAppender())

```
Pay attention if you forget to override `sendMessage` method in your own appender an exception will be thrown during logging of new message.


### 3. Setting new FormatMessageHandler
You have an opportunity to set your own formatMessageHandler which presents function where Logger inject message and level of message and it returns a formatted message.
```
Logger.setFormatMessageHandler(function (level, message) {
        return "We change formatHandler: " + level.toUpperCase() + message;
    });
```

### 4. After setting you can log info using the following ways:
```
    Logger.log(Logger.DEBUG, "Message");
    Logger.debug("Message");
    Logger.info("Message");
    Logger.error("Message");
    Logger.warn("Message");





```
 