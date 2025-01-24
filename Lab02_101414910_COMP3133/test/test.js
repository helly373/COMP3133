import { expect } from 'chai';
import { add, sub, mul, div } from '../app/calculator.js';

describe('Calculator Tests', () => {
    // Addition
    it('add(5,2) expected result 7 PASS', () => {
        expect(add(5, 2)).to.equal(7);
    });
    it('add(5,2) expected result 8 FAIL', () => {
        expect(add(5, 2)).to.equal(8);
    });

    // Subtraction
    it('sub(5, 2) expected result 3 PASS', () => {
        expect(sub(5, 2)).to.equal(3);
    });
    it('sub(5, 2) expected result 5 FAIL', () => {
        expect(sub(5, 2)).to.equal(5);
    });

    // Multiplication
    it('mul(5, 2) expected result 10 PASS', () => {
        expect(mul(5, 2)).to.equal(10);
    });
    it('mul(5, 2) expected result 12 FAIL', () => {
        expect(mul(5, 2)).to.equal(12);
    });

    // Division
    it('div(10, 2) expected result 5 PASS', () => {
        expect(div(10, 2)).to.equal(5);
    });
    it('div(10, 2) expected result 2 FAIL', () => {
        expect(div(10, 2)).to.equal(2);
    });
});
