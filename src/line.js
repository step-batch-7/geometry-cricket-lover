const Point = require("./point");

const arePointsCollinear = function(pointA, pointB, pointC) {
  const [x1, y1] = [pointA.x, pointA.y];
  const [x2, y2] = [pointB.x, pointB.y];
  const [x3, y3] = [pointC.x, pointC.y];

  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0;
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
    if (!(other instanceof Line)) return false;
    return (
      arePointsCollinear(this.pointA, this.pointB, other.pointA) &&
      arePointsCollinear(this.pointA, this.pointB, other.pointA)
    );
  }
  get length() {
    return this.pointA.findDistanceTo(this.pointB);
  }
  isParallelTo(other) {
    if (arePointsCollinear(this.pointA, this.pointB, other.pointA)) {
      return false;
    }
    return this.slope == other.slope;
  }
  get slope() {
    return (this.pointB.y - this.pointA.y) / (this.pointB.x - this.pointA.x);
  }
  split() {
    const midPoint = {
      x: (this.pointA.x + this.pointB.x) / 2,
      y: (this.pointA.y + this.pointB.y) / 2
    };
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
