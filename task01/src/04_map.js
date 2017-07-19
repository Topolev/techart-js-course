/*
 Implement a function that filters array based on callback result.
 var filteredArray = filter(array, callback);

 * */

var map = (function(){
    function isArray(array) {
        return Object.prototype.toString.call(array) === '[object Array]'
    }

    function isFunction(fn) {
        return Object.prototype.toString.call(fn) === '[object Function]'
    }

    function map(array, converter) {
        if (!isArray(array)) throw new Error("The first argument must be an array");
        if (!isFunction(converter)) throw new Error("The second element must be a function")
        var res = [],
            length = array.length;
        for (var i = 0; i < length; i++) {
            res.push(converter(array[i]));
        }
        return res;
    }
    return map;
})();
