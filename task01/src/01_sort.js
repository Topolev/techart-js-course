/*
    Implement a function that sort array of numbers and return sorted array. Sort type - all, except primitive like bubble sort.
 */

var sort = (function(){

    function isArray(array) {
        return Object.prototype.toString.call(array) === '[object Array]'
    }

    function sort(arr){
        if (!isArray(arr)) throw new Error("The argument must be an array");
        return quickSort(arr);
    }


    function quickSort(arr) {
        if (arr.length <2){
            return arr;
        }
        var pivot = arr[0],
            less = [] ,
            greater = [],
            length = arr.length;
        for (var i = 1; i< length; i++){
            if (arr[i]<= pivot){
                less.push(arr[i])
            } else{
                greater.push(arr[i]);
            }
        }
        return quickSort(less).concat(pivot, quickSort(greater));
    }
    return sort;
})();