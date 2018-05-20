/**
 * @param {number[]} nums
 * @return {number}
 */
/*给定一个未经排序的整数数组，找到最长且连续的的递增序列
例：输入: [1,3,5,4,7]  输出: 3
解释: 最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开
*/
'use strict';
var findLengthOfLCIS = function (nums) {
    var max = 1,
        start = nums[0],
        count = 1;
    if (nums.length === 0)
        return 0;
    else if (nums.length === 1)
        return count;
    else {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > start) {
                count++;
                start = nums[i];
            } else {
                if (count > max) {
                    max = count;
                }
                count = 1;
                start = nums[i];
            }
        }
        if (count > max)
            max = count;
        return max;
    };
};

var findLengthOfLCIS = function (nums) {
    var count = 1;
    var max = 1;
    for (let i = 0; i < nums.length;) {
        let n = i + 1;
        for (; n < nums.length; n++) {
            if (nums[n] > nums[n - 1]) {
                count++;
            } else {
                break;
            }
        }
        if (count > max) {
            max = count;
        }
        i = n + 1;
        count = 1;
    }
    return max;
};


var result = findLengthOfLCIS([1, 2, 3, 4, 3, 2, 3, 4, 5, 7, 9]);//6
console.log(result);