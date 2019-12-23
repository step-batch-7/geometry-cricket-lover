const Point = require("./point");

const arePointsCollinear = function(endA, endB, pointC) {
  const [x1, y1] = [endA.x, endA.y];
  const [x2, y2] = [endB.x, endB.y];
  const [x3, y3] = [pointC.x, pointC.y];

  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0;
};

const getCoordinates = function(line, ratioOfDistanceToLength) {
  const x =
    (1 - ratioOfDistanceToLength) * line.endA.x +
    ratioOfDistanceToLength * line.endB.x;
  const y =
    (1 - ratioOfDistanceToLength) * line.endA.y +
    ratioOfDistanceToLength * line.endB.y;

  return [x, y];
};

class Line {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }
  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }
  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      arePointsCollinear(this.endA, this.endB, other.endA) &&
      arePointsCollinear(this.endA, this.endB, other.endB)
    );
  }
  get length() {
    return this.endA.findDistanceTo(this.endB);
  }
  isParallelTo(other) {
    if (!(other instanceof Line)) return false;
    if (arePointsCollinear(this.endA, this.endB, other.endA)) {
      return false;
    }
    if (Math.abs(this.slope) == Infinity && Math.abs(other.slope) == Infinity)
      return true;
    return this.slope == other.slope;
  }
  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }
  split() {
    const midPoint = {
      x: (this.endA.x + this.endB.x) / 2,
      y: (this.endA.y + this.endB.y) / 2
    };
    return [new Line(this.endA, midPoint), new Line(midPoint, this.endB)];
  }
  hasPoint(other) {
    if (!(other instanceof Point)) {
      return false;
    }
    const line1 = new Line(this.endA, other);
    const line2 = new Line(other, this.endB);
    return +(line1.length + line2.length).toFixed(5) == +this.length.toFixed(5);
  }
  findX(y) {
    const x = (y - this.endA.y) / this.slope + this.endA.x;

    if (y == this.endA.y) return this.endA.x;
    if (!this.hasPoint(new Point(x, y))) return NaN;
    return x;
  }
  findY(x) {
    const y = (x - this.endA.x) * this.slope + this.endA.y;
    if (x == this.endA.x) return this.endA.y;
    if (!this.hasPoint(new Point(x, y))) return NaN;
    return y;
  }
  findPointFromStart(distance) {
    const ratioOfDistanceToLength = distance / this.length;
    if (ratioOfDistanceToLength < 0 || ratioOfDistanceToLength > 1) return null;
    const [x, y] = getCoordinates(this, ratioOfDistanceToLength);
    if (isNaN(x) || isNaN(y)) return null;
    return new Point(x, y);
  }
  findPointFromEnd(distance) {
    return this.findPointFromStart(this.length - distance);
  }
}

module.exports = Line;
