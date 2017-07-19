/*
 Implement a robot toy class with move(), left(), right(), report() functions.
 Robot has 0, 0 as initial coordinates and sees on NORTH.
  move() should change coordinate by one,
  left() and right() will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
  Coordinates can't be negative - ignore any move that change it on negative. report() should print robot coordinates and position.

 robot.move();
 robot.move();
 robot.move();
 robot.right();
 robot.move();
 robot.move();
 robot.report(); // 2,3,EAST

 * */

function Robot() {
    var x = 0, y = 0, currentDirection = 0,
        direction = [
            {
                name: "NORTH",
                dx: 0,
                dy: 1
            }, {
                name: "EAST",
                dx: 1,
                dy: 0
            }, {
                name: "SOUTH",
                dx: 0,
                dy: -1
            }, {
                name: "WEST",
                dx: -1,
                dy: 0
            }
        ];

    this.move = function () {
        var xOffset = direction[currentDirection].dx,
            yOffset = direction[currentDirection].dy;
        if ((x + xOffset >= 0) && (y + yOffset >= 0)) {
            x += xOffset;
            y += yOffset;
        }
        return this;
    }
    this.left = function () {
        currentDirection = currentDirection === 0 ? 3 : currentDirection--;
        return this;
    }
    this.right = function () {
        currentDirection = ++currentDirection % 4;
        return this;
    }
    this.report = function () {
        console.log(x + ', ' + y, ', ', direction[currentDirection].name);
    }

    this.getX = function(){
        return x;
    }

    this.getY = function(){
        return y;
    }

    this.getDirection = function(){
        return direction[currentDirection].name;
    }
}