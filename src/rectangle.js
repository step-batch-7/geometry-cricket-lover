const Point = require("./point");

class Rectangle {
  constructor(endA, endB) {
    this.vertexA = new Point(endA.x, endA.y);
    this.vertexB = new Point(endB.x, endB.y);
  }
  toString() {
    return `[Rectangle (${this.vertexA.x},${this.vertexA.y}) to (${this.vertexB.x},${this.vertexB.y})]`;
  }
}

module.exports = Rectangle;
