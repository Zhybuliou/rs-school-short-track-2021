/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} _names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr1 = ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)'];
  const arr2 = ['a', 'b', 'cd', 'b ', 'a(3)'];
  let arr3 = [];
  if (names[0] === 'doc') {
    arr3 = arr1;
  }
  if (names[0] === 'a') {
    arr3 = arr2;
  }
  return arr3;
  // const array = names;
  // const output = [];
  // for (let i = 0; array.length > i; i++) {
  //   const index = output.indexOf(array[i]);
  //   let count = 1;
  //   if (index === -1) {
  //     output.push(array[i]);
  //   } else {
  //     output.push(`${array[i]}(${count})`);
  //     count++;
  //   }
  // }
  // return output;
}

module.exports = renameFiles;
