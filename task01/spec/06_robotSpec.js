describe("Robot", function () {


    it("after following next commands: move, move, move, right, move, move, the tobot have to be in point (2,3) with EAST direction", function () {
        var robot = new Robot().move().move().move().right().move().move();
        expect(robot.getX()).toEqual(2);
        expect(robot.getY()).toEqual(3);
        expect(robot.getDirection()).toEqual('EAST');
    });
    it("robot cannot change position if after moving coordinate might be negative", function () {
        var robot = new Robot().left().move().move().move();
        expect(robot.getX()).toEqual(0);
        expect(robot.getY()).toEqual(0);
    });

});
