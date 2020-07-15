/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target) => {
  let answer = [];
  for (i in candidates) {
    let sum = 0;

    let arrayEvaluate = [];
    while (sum < target) {
      arrayEvaluate.push(candidates[i]);
      sum = arrayEvaluate.reduce(
        (accumulator, element) => accumulator + element
      );
      if (sum === target) {
        answer.push(arrayEvaluate);
      }
    }
  }
  return answer;
};

/**
 * Backtracking algorithm of finding all possible combination for specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  return combinationSumRecursive(candidates, target);
};

module.exports = combinationSum;

console.log(combinationSum([2, 3, 5], 8));
