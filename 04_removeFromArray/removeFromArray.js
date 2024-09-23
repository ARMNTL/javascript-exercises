const removeFromArray = function (array, ...itemsToRemove) {
    // using splice
    // for (const item of itemsToRemove) {
    //     let index = array.length;
    //     while (index >= 0) {
    //         if (array[index] === item) {
    //             array.splice(index, 1);
    //         } else {
    //             index--;
    //         }
    //     }
    // }

    // using filter
    for (const item of itemsToRemove) {
        array = array.filter((element) => element !== item);
    }

    return array;

    // from solution
    // return array.filter((element) => !itemsToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
