const Point = require("./point");

const arePointsEqual = function(pointA, pointB) {
  return pointA.x == pointB.x && pointA.y == pointB.y;
};

const getMidPoint = function(pointA, pointB) {
  return { x: (pointA.x + pointB.x) / 2, y: (pointA.y + pointB.y) / 2 };
};

const getCoordinates = function(line, ratioOfDistanceToLength) {
  const x =
    (1 - ratioOfDistanceToLength) * line.pointA.x +
    ratioOfDistanceToLength * line.pointB.x;
  const y =
    (1 - ratioOfDistanceToLength) * line.pointA.y +
    ratioOfDistanceToLength * line.pointB.y;
  return [x, y];
};

class Line {
  constructor(pointA, pointB) {
    this.pointA = new Point(pointA.x, pointA.y);
    this.pointB = new Point(pointB.x, pointB.y);
  }
  toString() {
    return `[Line (${this.pointA.x},${this.pointA.y}) to (${this.pointB.x},${this.pointB.y})]`;
  }
  isEqualTo(other) {
    return (
      arePointsEqual(this.pointA, other.pointA) &&
      arePointsEqual(this.pointB, other.pointB)
    );
  }
  get length() {
    return this.pointA.findDistanceTo(this.pointB);
  }
  isParallelTo(other) {
    return this.slope == other.slope;
  }
  get slope() {
    return (this.pointB.y - this.pointA.y) / (this.pointB.x - this.pointA.x);
  }
  split() {
    const midPoint = getMidPoint(this.pointA, this.pointB);
    return [new Line(this.pointA, midPoint), new Line(midPoint, this.pointB)];
  }
  hasPoint(point) {
    if (!point instanceof Point) {
      return false;
    }
    const line1 = new Line(this.pointA, point);
    const line2 = new Line(point, this.pointB);
    return line1.length + line2.length == this.length;
  }
  findX(y) {
    const x = (y - this.pointA.y) / this.slope + this.pointA.x;
    if (this.hasPoint(new Point(x, y))) return x;
    return NaN;
  }
  findY(x) {
    const y = (x - this.pointA.x) * this.slope + this.pointA.y;
    if (this.hasPoint(new Point(x, y))) return y;
    return NaN;
  }
  findPointFromStart(distance) {
    const ratioOfDistanceToLength = distance / this.length;
    if (ratioOfDistanceToLength < 0 || ratioOfDistanceToLength > 1) return NaN;
    const [x, y] = getCoordinates(this, ratioOfDistanceToLength);
    return new Point(x, y);
  }
  findPointFromEnd(distance) {
    return this.findPointFromStart(this.length - distance);
  }
}

module.exports = Line;
