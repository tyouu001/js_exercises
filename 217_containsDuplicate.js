/*
 * @param {number[]} nums
 * @return {boolean}
 */
/*给定一个整数数组，判断是否存在重复元素。
如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
如：输入: [1,2,3,1]，输出: true
*/
'use strict';
var containsDuplicate = function(nums) {
    var j = false;//设置标志
    nums.sort();//从小到大排序
    for (let i=1;i<nums.length;i++){
        if (nums[i] === nums[i-1])
            j = true;
    }
    return j;
};
containsDuplicate([1,2,3,1]);//true
containsDuplicate([1,2,3,4]);//false
containsDuplicate([1,1,1,3,3,4,3,2,4,2]);//true