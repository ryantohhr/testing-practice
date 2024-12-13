import caesarCipher from './caesarCipher.js';

test("returns shifted string", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
});

test("handles wrapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("handles case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("leaves non-alphabetical unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});