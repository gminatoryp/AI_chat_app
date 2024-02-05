/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let n

    for(let i =0; i < nums.length - 1; i++) {
       if(nums[i] > nums[i+1]) {
           n = nums[i]
       }   i++
    }

    return n
};

console.log(majorityElement([1,2,3]))


// solution

var majorityElement = function(nums) {
    let count = 0
    let candidate
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i]
            count = 1
        } else if (candidate === nums[i]) {
            count++
        } else {
            count--
        }
    }

   return candidate
};

console.log(majorityElement([1,1,2,2,3,3]))