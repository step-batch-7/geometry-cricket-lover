const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");

describe("Line", function() {
  describe("toString", function() {
    it("should give the string representation of line object", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const expected = "[Line (1,2) to (2,3)]";
      assert.strictEqual(line.toString(), expected);
    });
  });
  describe("isEqualTo", function() {
    it("should validate when given two lines are equal", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      assert.isTrue(line1.isEqualTo(line2));
    });
    it("should not validate when given two lines are not equal", function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 2, y: 3 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      assert.isFalse(line1.isEqualTo(line2));
    });
  });
  describe("length", function() {
    it("should give the length of the line with the given two points", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 2, y: 3 });
      const expected = Math.sqrt(5);
      assert.strictEqual(line.length, expected);
    });
  });
  describe("isParallelTo", function() {
    it("should validate when given two lines are parallel", function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const line2 = new Line({ x: 2, y: 2 }, { x: 6, y: 6 });
      assert.isTrue(line1.isParallelTo(line2));
    });
    it("should not validate when given two lines are not parallel", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 3 });
      const line2 = new Line({ x: 4, y: 4 }, { x: 6, y: 6 });
      assert.isFalse(line1.isParallelTo(line2));
    });
  });
  describe("slope", function() {
    it("should give the slope for the given line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 2, y: 3 });
      const expected = 2;
      assert.strictEqual(line.slope, expected);
    });
  });
  describe("split", function() {
    it("should split the given line into two equal halves", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const line1 = new Line({ x: 1, y: 2 }, { x: 1.5, y: 2.5 });
      const line2 = new Line({ x: 1.5, y: 2.5 }, { x: 2, y: 3 });
      const actual = line.split();

      assert.isOk(line1.isEqualTo(actual[0]));
      assert.isOk(line2.isEqualTo(actual[1]));
    });
  });
  describe("instanceOf", function() {
    it("should validate if given line is instance of Line class", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      assert.isOk(line instanceof Line);
    });
  });
  describe("hasPoint", function() {
    it("should validate if the given point is present on the line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const point = new Point(1.5, 2.5);
      const actual = line.hasPoint(point);
      assert.isTrue(actual);
    });
    it("should validate if the given point is present on the line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const point = new Point(1.5, 2);
      const actual = line.hasPoint(point);
      assert.isFalse(actual);
    });
  });
  describe("findX", function() {
    it("should give the corresponding x for given y on the line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const expected = 1.5;
      assert.strictEqual(line.findX(2.5), expected);
    });
  });
  describe("findY", function() {
    it("should give the corresponding y for given x on the line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const expected = 2.5;
      assert.strictEqual(line.findY(1.5), expected);
    });
  });
});
