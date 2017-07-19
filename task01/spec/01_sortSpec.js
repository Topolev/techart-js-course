describe("Sort", function () {

    describe("when a developer doesn't follow API and pass invalid arguments", function () {
        it("throw exception if the passed argument isn't array", function () {
            expect(function () {
                sort(1)
            }).toThrow(new Error("The argument must be an array"));
        });
        it("throw exception if the passed argument is null", function () {
            expect(function () {
                sort(null)
            }).toThrow(new Error("The argument must be an array"));
        });
        it("throw exception if the passed argument is undefined", function () {
            expect(function () {
                sort(undefined)
            }).toThrow(new Error("The argument must be an array"));
        });
    });
    describe("when a developer follows API", function () {
        it("input array is  sorted array [0, 1, 2, 3, 4, 5, 6], function have to return  [0, 1, 2, 3, 4, 5, 6]", function () {
            expect(sort([0, 1, 2, 3, 4, 5, 6])).toEqual([0, 1, 2, 3, 4, 5, 6]);
        });
        it("input array is array which consists of the same values [5, 5, 5], function have to return  [5, 5, 5]", function () {
            expect(sort([5, 5, 5])).toEqual([5, 5, 5]);
        });
        it("input array is [6, 5, 4, 3, 2, 1, 0], function have to return   [0, 1, 2, 3, 4, 5, 6]", function () {
            expect(sort([0, 1, 2, 3, 4, 5, 6])).toEqual([0, 1, 2, 3, 4, 5, 6]);
        });
        it("input array is [100, 99, 300, 1000, 1, 6, -5, 20, 18, 17, 5, 99, 100, 6], function have to return   [ -5, 1, 5, 6, 6, 17, 18, 20, 99, 99, 100, 100, 300, 1000 ]", function () {
            expect(sort([100, 99, 300, 1000, 1, 6, -5, 20, 18, 17, 5, 99, 100, 6])).toEqual([-5, 1, 5, 6, 6, 17, 18, 20, 99, 99, 100, 100, 300, 1000]);
        });
        it("input array is empty, function have to return  empty array", function () {
            expect(sort([])).toEqual([]);
        });
    })


});
