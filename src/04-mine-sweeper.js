/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const array = matrix;
  for (let i = 0; array.length > i; i++) {
    for (let y = 0; array[i].length > y; y++) {
      if (array[i][y] === true) {
        array[i + 1][y] += 1; // bottom
        if (i > 0) { array[i - 1][y] += 1; } // top
        array[i][y + 1] += 1; // right
        if (y > 0) { array[i][y - 1] += 1; } // left;
        // eslint-disable-next-line max-len
        if (y > 0 && i > 0 && array[i - 1][y - 1] !== true) { array[i - 1][y - 1] += 1; } // top left
        if (y > 0 && i > 0) { array[i + 1][y - 1] += 1; } // bottom left
        if (y > 0 && i > 0) { array[i + 1][y + 1] += 1; } // top right
        // eslint-disable-next-line max-len
        if (y > 0 && i > 0 && array[i - 1][y + 1] !== true) { array[i - 1][y + 1] += 1; } // bottom right
      }
    }
  }
  return array;
}

module.exports = minesweeper;
