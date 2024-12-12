import calculator from './calculator.js';

test("adds 1 and 2 to give 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test("subtracts 1 from 2 to give 1", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
})

test("multiplies 1 and 2 to give 2", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
})

test("divides 9 by 3 to give 3", () => {
    expect(calculator.divide(9, 3)).toBe(3);
})