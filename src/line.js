const arePointsEqual = function(pointA, pointB) {
  return pointA.x == pointB.x && pointA.y == pointB.y;
};

class Line {
  constructor(pointA, pointB) {
    this.pointA = { x: pointA.x, y: pointA.y };
    this.pointB = { x: pointB.x, y: pointB.y };
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
  length() {
    const differenceInX = this.pointB.x - this.pointA.x;
    const differenceInY = this.pointB.y - this.pointA.y;
    return Math.sqrt(
      differenceInX * differenceInX + differenceInY * differenceInY
    );
  }
  isParallelTo(other) {
    return this.slope == other.slope;
  }
  get slope() {
    return (this.pointB.y - this.pointA.y) / (this.pointB.x - this.pointA.x);
  }
}

module.exports = Line;
