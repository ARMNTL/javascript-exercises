const sumAll = function (startNumber, endNumber) {
    if (typeof startNumber !== "number" || typeof endNumber !== "number") {
        return "ERROR";
    } else if (
        startNumber % Math.floor(startNumber) !== 0 ||
        endNumber % Math.floor(endNumber) !== 0
    ) {
        return "ERROR";
    } else if (startNumber < 0 || endNumber < 0) {
        return "ERROR";
    }

    let totalSum = 0;

    if (startNumber < endNumber) {
        for (let i = startNumber; i <= endNumber; i++) {
            totalSum += i;
        }
    } else {
        for (let i = startNumber; i >= endNumber; i--) {
            totalSum += i;
        }
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
