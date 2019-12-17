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
  isEqualTo(pointB) {
    return (this.x = pointB.x && this.y == pointB.y);
  }
  clone() {
    return new Point(this.x, this.y);
  }
  isOn(line) {
    return line.hasPoint(this);
  }
}

module.exports = Point;
