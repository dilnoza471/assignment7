import { addNum } from "."
describe("add 2 numbers", ()=>{
    it("should add 2 numbers correctly", ()=>{
        const a = 5;
        const b = 7;
        expect(addNum(a, b)).toBe(a+b);
    });
})