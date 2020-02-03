import { test } from "./helpers/test";

/*
  Create a function that returns true if the first array can be nested inside the second.
  arr1 can be nested inside arr2 if:
  1. arr1's min is greater than arr2's min.
  2. arr1's max is less than arr2's max.
  Examples
  canNest([1, 2, 3, 4], [0, 6]) ➞ true
  canNest([3, 1], [4, 0]) ➞ true
  canNest([9, 9, 8], [8, 9]) ➞ false
  canNest([1, 2, 3, 4], [2, 3]) ➞ false

  Assumptions - childArray and parentArray are always arrays
*/

const canNest = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) {return true}
  
  const getMaxMin = (arr, name) => {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i]
      } else if (arr[i] > max) {
        max = arr[i]
      }
    }

    return {
      [`max${name}`]: max,
      [`min${name}`]: min
    }
  }

  const { min1, max1 } = getMaxMin(arr1, 1);
  const { min2, max2 } = getMaxMin(arr2, 2);

  return min1 > min2 && max1 < max2;
}

function testCanNest(inputs, expect) {
  test(canNest(...inputs), expect);
}

testCanNest([[1, 2, 3, 4], [0, 6]], true)
testCanNest([[3, 1], [4, 0]], true)
testCanNest([[9, 9, 8], [8, 9]], false)
testCanNest([[1, 2, 3, 4], [2, 3]], false)

testCanNest([[1, 2, 3, 4], [0, 5, 1]], true)
testCanNest([[1, 2, 3, 4], [0, 4, 1]], false)
testCanNest([[1, 2, 3, 4], [5, 5, 5]], false)
testCanNest([[1, 2, 3, 4], [1, 2, 3, 4]], false)
testCanNest([[1, 2, 3], [1, 2, 3, 4]], false)
testCanNest([[1, 2, 3, 4], [1, 2, 3]], false)
testCanNest([[1, 2, 3, 4], [0, 5, 5, 5, 6, 7]], true)
testCanNest([[], []], true)
testCanNest([[], [1]], true)
testCanNest([[], [1,2]], true)
testCanNest([[1,2], []], true)