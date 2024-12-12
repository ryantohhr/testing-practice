import capitalize from './capitalize.js';

test('returns capitalized string', () => {
    expect(capitalize("helloworld")).toBe("Helloworld");
    expect(capitalize("bye")).toBe("Bye");
});