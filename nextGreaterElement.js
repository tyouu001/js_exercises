/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
/*给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。
找到 nums1 中每个元素在 nums2 中的下一个比其大的值。
nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1。
例：输入: nums1 = [4,1,2], nums2 = [1,3,4,2]，输出: [-1,3,-1]；
    输入: nums1 = [2,4], nums2 = [1,2,3,4]，输出: [3,-1]
注意：nums1和nums2中所有元素是唯一的；nums1和nums2 的数组大小都不超过1000
*/
'use strict';
var nextGreaterElement = function(findNums, nums) {
    var i,
        n,
        x,
        arr=[];
    for (i=0;i<findNums.length;i++){//遍历子集
        n = nums.indexOf(findNums[i]);//找出对应索引号
        n ++;
        x = false;//设定个标志，以下循环后不符合条件的默认使用此标志
        for (n;n<nums.length;n++){//遍历母集中索引号以后的元素
            if (nums[n] > findNums[i]){//判断索引号以后的元素大小
                arr.push(nums[n]);
                x = true;//符合条件，更改标志
                break;
            }else
                continue;
        };
        if (!x)//不符合条件的，输出-1
            arr.push(-1);
    };
    return arr;
};
nextGreaterElement([4,1,2],[1,3,4,2]);//[-1,3,-1]
nextGreaterElement([2,4],[1,2,3,4]);//[3,-1]
nextGreaterElement([3,2,4],[3,1,2,4,5]);//[4,4,5]