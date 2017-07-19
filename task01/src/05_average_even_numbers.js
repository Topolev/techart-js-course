/*
 Given array of numbers, find average of even.
 var average = averageOfEven(array);

 * */

var averageOfEven = (function () {
    function isArray(array) {
        return Object.prototype.toString.call(array) === '[object Array]'
    }


    function averageOfEven(array, converter) {
        if (!isArray(array)) throw new Error("The first argument must be an array");
        var sum = 0,
            count = 0,
            length = array.length;

        for (var i = 0; i < length; i++) {
            if (array[i] % 2 == 0) {
                count++;
                sum += array[i];
            }
        }

        return count === 0 ? 0 : sum / count;
    }

    return averageOfEven;
})();
