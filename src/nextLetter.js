import { rotateStr } from "./rotate.js";

export function nextLetterInAlphabet(precedingLetter, direction) {
    if(direction === 1) {
        return rotateStr(precedingLetter, 1);
    } else if(direction === 0) {
        return rotateStr(precedingLetter, -1);
    }
}