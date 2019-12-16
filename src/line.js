class Line {
  constructor(pointA, pointB) {
    this.pointA = { x: pointA.x, y: pointA.y };
    this.pointB = { x: pointB.x, y: pointB.y };
  }
  toString() {
    return `[Line (${this.pointA.x},${this.pointA.y}) to (${this.pointB.x},${this.pointB.y})]`;
  }
}

module.exports = Line;
