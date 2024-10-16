import { add } from "./utils";

describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1, 2)).equal(3);
    });
});