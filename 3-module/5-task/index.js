/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let filterArray = [];
  arr.forEach((item) => {
    if (item >= a && item <= b) filterArray.push(item)
  });
  return filterArray;
}
