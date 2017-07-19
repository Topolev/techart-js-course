/**
 * Created by uladzimir on 11.7.17.
 */
define(['../Appender'], function (Appender) {
    function EndPointAppender(url) {
        this.url = url;
    }

    EndPointAppender.prototype = Object.create(Appender.prototype);


    EndPointAppender.prototype.sendMessage =  function (msg) {
        if (window.XMLHttpRequest) {
            // code for modern browsers
            xhr = new XMLHttpRequest();
        } else {
            // code for old IE browsers
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.open('GET', this.url + "?msg=" + msg, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if(xhr.status == 200) {
                    alert("Server got the following message:" + xhr.responseText);
                } else {
                    console.log(xhr.statusText);
                }
            }
        };
        xhr.send();

    };

    return EndPointAppender;
});