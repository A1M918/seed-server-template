import {expect} from "chai";
import {Class} from "../../src/Class";

describe("Method Multiplier", () => {
    it("It should multiple the number with id and return the result", () => {
        const object = new Class();
        expect(object.methodMultiply(10)).to.equal(100);
    });
});
