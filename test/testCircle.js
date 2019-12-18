const assert = require("chai").assert;
const Circle = require("../src/circle");

describe("Circle", function() {
  describe("toString", function() {
    it("should give the string representation of circle object", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const expected = "[Circle @(1,2) radius 5]";
      assert.strictEqual(circle.toString(), expected);
    });
  });
  describe("isEqualTo", function() {
    it("should validate when the the given circles are at same location and of same size", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      const circle2 = new Circle({ x: 0, y: 0 }, 5);
      assert.isTrue(circle1.isEqualTo(circle2));
    });
    it("should not validate when the the given circles are at same location but not of same size", function() {
      const circle1 = new Circle({ x: 3, y: 2 }, 5);
      const circle2 = new Circle({ x: 3, y: 2 }, 4);
      assert.isFalse(circle1.isEqualTo(circle2));
    });
    it("should not validate when the the given circles are not at same location but of same size", function() {
      const circle1 = new Circle({ x: 2, y: 3 }, 5);
      const circle2 = new Circle({ x: 3, y: 2 }, 5);
      assert.isFalse(circle1.isEqualTo(circle2));
    });
    it("should not validate for circles of different instance", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      const circle2 = ({ x: 4, y: 5 }, 5);
      assert.isFalse(circle1.isEqualTo(circle2));
    });
  });
  describe("area", function() {
    it("should give the area of given circle", function() {
      const circle = new Circle({ x: 2, y: 3 }, 7);
      assert.approximately(circle.area, 154, 0.1);
    });
    it("should give 0 as area for circle of radius zero", function() {
      const circle = new Circle({ x: 2, y: 3 }, 0);
      assert.strictEqual(circle.area, 0);
    });
  });
  describe("perimeter", function() {
    it("should give the perimeter of given circle", function() {
      const circle = new Circle({ x: 2, y: 3 }, 7);
      assert.approximately(circle.perimeter, 44, 0.1);
    });
    it("should give 0 as perimeter for circle of radius zero", function() {
      const circle = new Circle({ x: 2, y: 3 }, 0);
      assert.strictEqual(circle.perimeter, 0);
    });
  });
});
