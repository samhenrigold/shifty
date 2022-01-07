// Original code from https://stackoverflow.com/a/67326566/17817840

export const rotateStr = (str, shift) => {
    let result = '';
    let i = 0;
    while (i < str.length) {
        let charCode = str[i].charCodeAt();
        result += String.fromCharCode(rotateChar(charCode, shift));
        i++;
    }
    return result;
}

export const rotateChar = (charCode, shift) => {
    if (charCode > 96 && charCode < 123) {  // check if charCode is lowercase letter; automatically ignores non-letters
        charCode += shift % 26
        if (charCode > 122) {               // if shift passes 'z', reset to 'a'
            charCode = (charCode - 122) + 96;
        } else if (charCode < 97) {         // same as previous, but checking shift doesn't pass 'a' when shifting negative numbers
            charCode = (charCode - 97) + 123;
        }
    }

    if (charCode > 64 && charCode < 91) {  // same thing as above but for uppercase letters
        charCode += shift % 26
        if (charCode > 90) {
            charCode = (charCode - 90) + 64;
        } else if (charCode < 65) {
            charCode = (charCode - 65) + 91;
        }
    }

    return charCode;
}