const repeatString = function (textToRepeat, numberOfTimes) {
    if (numberOfTimes < 0) return "ERROR";

    let finalText = "";

    for (let i = 0; i < numberOfTimes; i++) {
        finalText += textToRepeat;
    }

    return finalText;
};

// Do not edit below this line
module.exports = repeatString;
