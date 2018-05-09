/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
你可以假设数组中无重复元素
*/
'use strict';
var searchInsert = function(nums, target) {
    var ind = nums.indexOf(target);
    if (ind > -1)//数组中无目标数
        return ind;
    else{
        for (let i=0;i<nums.length;i++){
            if (nums[i] > target)
                return i;
        };
        return nums.length;//目标数最大，放至最后
    };
};
searchInsert([1,3,5,6], 5);//2
searchInsert([1,3,5,6], 2);//1
searchInsert([1,3,5,6], 7);//4
searchInsert([1,3,5,6], 0);//0