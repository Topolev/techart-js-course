describe("Map", function () {

    describe("when a developer doesn't follow API and pass invalid arguments", function () {
        it("throw exception if the first passed argument isn't array", function () {
            expect(function () {
                map(1)
            }).toThrow(new Error("The first argument must be an array"));
        });
        it("throw exception if the second passed argument isn't function", function () {
            expect(function () {
                map([], 1)
            }).toThrow(new Error("The second element must be a function"));
        });
        it("throw exception if the second passed argument is null", function () {
            expect(function () {
                map([], null)
            }).toThrow(new Error("The second element must be a function"));
        });
    });

    describe("when a developer follows API", function () {
        it("when input array is  [0, 1, 2, 3, 4, 5, 6] and necessary multiple every item by 2, function have to return [0, 2, 4, 6, 8, 10, 12]", function () {
            expect(map([0, 1, 2, 3, 4, 5, 6], function(item){ return item *2})).toEqual([0, 2, 4, 6, 8, 10, 12]);
        });
        it("when input array is  empty and necessary multiple every item by 2, function have to return empty array", function () {
            expect(map([], function(item){ return item *2})).toEqual([]);
        })
    })

});
