export default function caesarCipher(string, shiftFactor) {
    let ascii;
    let asciiNew;
    const newString = [];
    for (let i = 0; i < string.length; i++) {
        ascii = string.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122) {
            shiftFactor = shiftFactor % 26;
            asciiNew = ascii + shiftFactor;
            if (ascii >= 65 && ascii <= 90) {
                if (asciiNew > 90) {
                    asciiNew -= 26;
                }
            } else {
                if (asciiNew > 122) {
                    asciiNew -= 26;
                }
            }
            newString.push(String.fromCharCode(asciiNew));
        } else {
            newString.push(String.fromCharCode(ascii));            
        }
    }
    return newString.join('');
}