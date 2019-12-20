const Point = require("./point");
const Line = require("./line");

const getSides = function(pointA, pointB, pointC, pointD) {
  const ab = new Line(pointA, pointB);
  const bc = new Line(pointB, pointC);
  const cd = new Line(pointC, pointD);
  const da = new Line(pointD, pointA);
  return [ab, bc, cd, da];
};

class Rectangle {
  constructor(endA, endB) {
    this.vertexA = new Point(endA.x, endA.y);
    this.vertexB = new Point(endA.x, endB.y);
    this.vertexC = new Point(endB.x, endB.y);
    this.vertexD = new Point(endB.x, endA.y);
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
      (this.vertexA.isEqualTo(other.vertexA) &&
        this.vertexC.isEqualTo(other.vertexC)) ||
      (this.vertexA.isEqualTo(other.vertexC) &&
        this.vertexC.isEqualTo(other.vertexA))
    );
  }
  hasPoint(point) {
    const [ab, bc, cd, da] = getSides(
      this.vertexA,
      this.vertexB,
      this.vertexC,
      this.vertexD
    );

    return (
      ab.hasPoint(point) ||
      bc.hasPoint(point) ||
      cd.hasPoint(point) ||
      da.hasPoint(point)
    );
  }
}

module.exports = Rectangle;
