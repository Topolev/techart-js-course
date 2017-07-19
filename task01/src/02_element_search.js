/*
 Implement a function that returns the first element in array that satisfies given condition.
 var value = search(array, condition);
*/

var search = (function(){
    function isArray(array) {
        return Object.prototype.toString.call(array) === '[object Array]'
    }

    function isFunction(fn) {
        return Object.prototype.toString.call(fn) === '[object Function]'
    }

    function search(array, condition) {
        if (!isArray(array)) throw new Error("The first argument must be an array");
        if (!isFunction(condition)) throw new Error("The second element must be a function")
        var length = array.length;
        for (var i = 0; i < length; i++) {
            if (condition(array[i])) return array[i];
        }
        return null;
    }
    return search;
})();

