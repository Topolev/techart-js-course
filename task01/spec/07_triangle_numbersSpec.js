describe("Triangular number", function () {


    it("The first triangle number which has more that 0 divisors is 1", function () {
        expect(getFirstTriangleNumberWithDivisorOver(0)).toEqual(1);
    });

    it("The first triangle number which has more that 1 divisors is 3", function () {
        expect(getFirstTriangleNumberWithDivisorOver(1)).toEqual(3);
    });

    it("The first triangle number which has more that 2 divisors is 6", function () {
        expect(getFirstTriangleNumberWithDivisorOver(2)).toEqual(6);
    });

    it("The first triangle number which has more that 3 divisors is 6", function () {
        expect(getFirstTriangleNumberWithDivisorOver(3)).toEqual(6);
    });

    it("The first triangle number which has more that 4 divisors is 28", function () {
        expect(getFirstTriangleNumberWithDivisorOver(4)).toEqual(28);
    });

    it("The first triangle number which has more that 5 divisors is 28", function () {
        expect(getFirstTriangleNumberWithDivisorOver(5)).toEqual(28);
    });

    it("The first triangle number which has more that 500 divisors is 76576500", function () {
        expect(getFirstTriangleNumberWithDivisorOver(500)).toEqual(76576500);
    });


});
