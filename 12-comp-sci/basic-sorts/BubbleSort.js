function bubbleSort (array) {
    let iterateAgain = true; // we need to iterate at least once

    let end = array.length - 1;

    while (iterateAgain) {
        iterateAgain = false; // maybe this is the last iteration
        for (let i = 0; i < end; i++) {
            if (array[i] > array[i+1]) {
                // ES6 destructuring parallel assignment
                // [a, b] = [b, a]
                [array[i], array[i+1]] = [array[i+1], array[i]];
                iterateAgain = true; // damn, we need to iterate again
            }
        }
        end--;
    }

    return array;
}

module.exports = bubbleSort;