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
  get perimeter() {
    const length = this.vertexB.findDistanceTo(this.vertexC);
    const breadth = this.vertexA.findDistanceTo(this.vertexB);
    return 2 * (length + breadth);
  }
  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;

    return (
      this.vertexA.isEqualTo(other.vertexA) &&
      this.vertexB.isEqualTo(other.vertexB) &&
      this.vertexC.isEqualTo(other.vertexC) &&
      this.vertexD.isEqualTo(other.vertexD)
    );
  }
}

module.exports = Rectangle;
