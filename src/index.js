// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (towelSort.arguments.length == 0) {
        return [];
    }
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let columnIdx = i % 2 === 0 ? j : matrix[i].length - j - 1;
            result.push(matrix[i][columnIdx]);
        }
    }

    return result;
};
