/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let array = 0;
  const matrixes = matrix;
  for (let i = 0; matrixes.length > i; i++) {
    for (let z = 0; matrixes[i].length > z; z++) {
      if (matrixes[i][z] === 0 && typeof matrixes[i + 1] !== 'undefined') {
        array -= matrixes[i + 1][z];
      } else {
        array += matrixes[i][z];
      }
    }
  }
  return array;
}

module.exports = getMatrixElementsSum;
