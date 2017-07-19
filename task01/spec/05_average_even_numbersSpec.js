describe("Average of even numbers", function () {

    describe("when a developer doesn't follow API and pass invalid arguments", function () {
        it("throw exception if the passed argument isn't array", function () {
            expect(function () {
                averageOfEven(1)
            }).toThrow(new Error("The first argument must be an array"));
        });
    });

    describe("when a developer follows API", function () {
        it("when input array is  [0, 1, 2, 3, 4, 5, 6], function have to return 3", function () {
            expect(averageOfEven([0, 1, 2, 3, 4, 5, 6])).toEqual(3);
        });
        it("when input array is empty, function have to return 0", function () {
            expect(averageOfEven([])).toEqual(0);
        })
        it("when there is no even numbers in array, function have to return 0", function () {
            expect(averageOfEven([1, 3, 5, 7])).toEqual(0);
        })
    })

});
