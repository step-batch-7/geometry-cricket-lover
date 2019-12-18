const Point = require("./point");

class Rectangle {
  constructor(endA, endB) {
    this.vertexA = new Point(endA.x, endA.y);
    this.vertexC = new Point(endB.x, endB.y);
    this.vertexB = new Point(endA.x, endB.y);
    this.vertexD = new Point(endA.y, endB.x);
  }
  toString() {
    return `[Rectangle (${this.vertexA.x},${this.vertexA.y}) to (${this.vertexC.x},${this.vertexC.y})]`;
  }
  get area() {
    const length = this.vertexB.findDistanceTo(this.vertexC);
    const breadth = this.vertexA.findDistanceTo(this.vertexB);
    return length * breadth;
  }
}

module.exports = Rectangle;
