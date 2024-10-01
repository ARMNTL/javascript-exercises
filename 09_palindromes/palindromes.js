const palindromes = function (text) {
    const lowerCased = text.toLowerCase();
    const unpunctuated = lowerCased.replace(/[.,/#!$%^&*;:{}=\-_`~() ]/g, "");

    let lastLetterIndex = unpunctuated.length - 1;
    for (let i = 0; i < lastLetterIndex; i++) {
        if (unpunctuated[i] != unpunctuated[lastLetterIndex]) {
            return false;
        }
        lastLetterIndex--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
