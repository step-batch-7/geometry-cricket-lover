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
    const diagonal1 = new Line(this.vertexA, this.vertexC);
    const diagonal2 = new Line(this.vertexB, this.vertexD);
    const otherDiagonal = new Line(other.vertexA, other.vertexC);
    return (
      diagonal1.isEqualTo(otherDiagonal) || diagonal2.isEqualTo(otherDiagonal)
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
  covers(other) {
    if (!(other instanceof Point)) return false;
    const [xMin, xMax] = [this.vertexA.x, this.vertexC.x].sort((a, b) => a - b);
    const [yMin, yMax] = [this.vertexA.y, this.vertexC.y].sort((a, b) => a - b);
    return other.x > xMin && other.x < xMax && other.y > yMin && other.y < yMax;
  }
}

module.exports = Rectangle;
