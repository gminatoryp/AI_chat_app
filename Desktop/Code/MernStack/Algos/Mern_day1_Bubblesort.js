Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@gminatoryp 
neilm813
/
-MERN-demos
1
01
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
-MERN-demos/algorithms/sorts/bubbleSort.js /
@neilm813
neilm813 algo slns
Latest commit 43ea02a 8 minutes ago
 History
 1 contributor
49 lines (39 sloc)  1.36 KB
  
/* 
  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
  Stable sort
  
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
function bubbleSort(nums) {
  let isSorted = false;

  while (isSorted === false) {
    isSorted = true;

    for (let i = 0; i < nums.length - 1; i++) {
      const j = i + 1;

      if (nums[i] > nums[j]) {
        isSorted = false;
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete