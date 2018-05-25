/**
 * @param {number[]} nums
 * @return {number}
 */
/*给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 
例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大
示例： 输入: [1,4,3,2]  输出: 4
解释:  n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
提示:  n 是正整数,范围在 [1, 10000].
      数组中的元素范围在 [-10000, 10000]
*/
'use strict';
var arrayPairSum = function(nums) {
    var i = 0,
        sum = 0,
        len = nums.length;
    nums.sort(function(a,b){//从小到大顺序排列
        return a - b;
    });
    while ( i < len) {
        sum += nums[i];//从最小数开始，隔一个取一个数相加
        i += 2;
    }
    return sum;
};
var result = arrayPairSum([1,4,3,2]);//4
console.log(result);