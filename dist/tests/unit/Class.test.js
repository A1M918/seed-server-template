"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Class_1 = require("../../src/Class");
describe("Method Multiplier", () => {
    it("It should multiple the number with id and return the result", () => {
        const object = new Class_1.Class();
        (0, chai_1.expect)(object.methodMultiply(10)).to.equal(100);
    });
});
