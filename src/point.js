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
  isEqualTo(other) {
    if (!(other instanceof Point)) return false;
    return this.x == other.x && this.y == other.y;
  }
  clone() {
    return new Point(this.x, this.y);
  }
  isOn(line) {
    return line.hasPoint(this);
  }
  findDistanceTo(point) {
    if (!(point instanceof Point)) {
      return NaN;
    }
    const differenceInX = this.x - point.x;
    const differenceInY = this.y - point.y;
    return Math.sqrt(
      differenceInX * differenceInX + differenceInY * differenceInY
    );
  }
}

module.exports = Point;
