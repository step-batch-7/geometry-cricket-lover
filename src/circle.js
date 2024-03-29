const Point = require("../src/point");

class Circle {
  constructor(centre, radius) {
    (this.centre = new Point(centre.x, centre.y)), (this.radius = radius);
  }
  toString() {
    return `[Circle @(${this.centre.x},${this.centre.y}) radius ${this.radius}]`;
  }
  isEqualTo(other) {
    if (!(other instanceof Circle)) return false;
    return this.centre.isEqualTo(other.centre) && this.radius == other.radius;
  }
  get area() {
    return Math.PI * this.radius * this.radius;
  }
  get perimeter() {
    return 2 * Math.PI * this.radius;
  }
  hasPoint(other) {
    if (!(other instanceof Point)) return false;
    return other.findDistanceTo(this.centre) == this.radius;
  }
  moveTo(centre) {
    return new Circle(centre, this.radius);
  }
  covers(other) {
    if (!(other instanceof Point)) return false;
    return other.findDistanceTo(this.centre) < this.radius;
  }
}

module.exports = Circle;
