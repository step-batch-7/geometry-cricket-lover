class Point {
  constructor(xCoordinate, yCoordinate) {
    this.x = xCoordinate;
    this.y = yCoordinate;
  }
  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
  visit(functionReference) {
    return functionReference(this.x, this.y);
  }
}

module.exports = Point;
