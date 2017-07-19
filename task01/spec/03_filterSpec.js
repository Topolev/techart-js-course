describe("Filter array", function () {

    describe("when a developer doesn't follow API and pass invalid arguments", function () {
        it("throw exception if the first passed argument isn't array", function () {
            expect(function () {
                filter(1)
            }).toThrow(new Error("The first argument must be an array"));
        });
        it("throw exception if the second passed argument isn't function", function () {
            expect(function () {
                filter([], 1)
            }).toThrow(new Error("The second element must be a function"));
        });
        it("throw exception if the second passed argument is null", function () {
            expect(function () {
                filter([], null)
            }).toThrow(new Error("The second element must be a function"));
        });
    });

    describe("when a developer follows API", function () {
        it("when input array is  [0, 1, 2, 3, 4, 5, 6] and necessary choose only items which the greater than 3, function have to return [4,5,6]", function () {
            expect(filter([0, 1, 2, 3, 4, 5, 6], function(item){ return item >3})).toEqual([4,5,6]);
        });
        it("when input array is  empty  and necessary choose only items which the greater than 3, function have to return empty array", function () {
            expect(filter([], function(item){ return item >3})).toEqual([]);
        })
        it("when there is no satisfied element according to condition, function have to return empty array", function () {
            expect(filter([0, 1, 2, 3, 4, 5, 6], function(item){ return item >10})).toEqual([]);
        })
    })

});
