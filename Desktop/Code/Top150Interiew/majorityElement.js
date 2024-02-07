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

//solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hashmap = new Map();
    
    // Count the frequency of each element
    for (let num of nums) {
        if (hashmap.has(num)) {
            hashmap.set(num, hashmap.get(num) + 1);
        } else {
            hashmap.set(num, 1);
        }
    }
    
    // Find the element with maximum frequency
    let majorityElement = null;
    let maxFrequency = 0;
    for (let [num, frequency] of hashmap) {
        if (frequency > maxFrequency) {
            majorityElement = num;
            maxFrequency = frequency;
        }
    }
    
    return majorityElement;
};
