const assert = require("chai").assert;
const Line = require("../src/line");
const Rectangle = require("../src/rectangle");

describe("rectangle", function() {
  describe("toString", function() {
    it("should give the string representation of rectangle object", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 2, y: 3 });
      const expected = "[Rectangle (1,2) to (2,3)]";
      assert.strictEqual(rectangle.toString(), expected);
    });
  });
  describe("area", function() {
    it("should give the area of given rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 4 }, { x: 6, y: 0 });
      assert.strictEqual(rectangle.area, 24);
    });
  });
});
