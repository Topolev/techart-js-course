describe("Element search", function () {

    describe("when a developer doesn't follow API and pass invalid arguments", function () {
        it("throw exception if the first passed argument isn't array", function () {
            expect(function () {
                search(1)
            }).toThrow(new Error("The first argument must be an array"));
        });
        it("throw exception if the second passed argument isn't function", function () {
            expect(function () {
                search([], 1)
            }).toThrow(new Error("The second element must be a function"));
        });
        it("throw exception if the second passed argument is null", function () {
            expect(function () {
                search([], null)
            }).toThrow(new Error("The second element must be a function"));
        });
    });

    describe("when a developer follows API", function () {
        it("when input array is  [0, 1, 2, 3, 4, 5, 6] and necessary return the first number which the greater 3, function have to return 4", function () {
            expect(search([0, 1, 2, 3, 4, 5, 6], function(item){ return item >3})).toEqual(4);
        });
        it("when input array is  empty and necessary return the first number which the greater 3, function have to return null", function () {
            expect(search([], function(item){ return item >3})).toEqual(null);
        })
        it("when there is no satisfied element accordint to condition, function have to return null", function () {
            expect(search([0, 1, 2, 3, 4, 5, 6], function(item){ return item >10})).toEqual(null);
        })
    })

});
