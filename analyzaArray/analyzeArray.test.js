import analyzaArray from './analyzeArray.js';

const testArray = [1,8,3,4,2,6];

test('returns average', () => {
    expect(analyzaArray(testArray).average).toBe(4);
});

test('returns min', () => {
    expect(analyzaArray(testArray).min).toBe(1);
});

test('returns max', () => {
    expect(analyzaArray(testArray).max).toBe(8);
});

test('returns length', () => {
    expect(analyzaArray(testArray).length).toBe(6);
});