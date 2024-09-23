const reverseString = function (textToReverse) {
    let finalText = "";

    while (textToReverse.length > 0) {
        finalText += textToReverse.slice(-1);
        textToReverse = textToReverse.slice(0, -1);
    }

    return finalText;
};

// Do not edit below this line
module.exports = reverseString;
