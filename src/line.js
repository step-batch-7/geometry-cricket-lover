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
    const x1 = this.pointA.x;
    const x2 = this.pointB.x;
    const y1 = this.pointA.y;
    const y2 = this.pointB.y;
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }
}

module.exports = Line;
