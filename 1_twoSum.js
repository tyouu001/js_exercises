/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用
例：给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/
'use strict';
var twoSum = function(nums, target) {
    var num_1,
        num_2,
        sum,
        arr=[];
    for (let i=0;i<nums.length;i++){//遍历数字1
        num_1 = nums[i];
        for (let n=i+1;n<nums.length;n++){//从下一个数开始遍历数字2
            num_2 = nums[n];
            sum = num_1 + num_2;
            if (sum === target){
                arr.push(i,n);
                return arr;
            };
        };
    };
};
twoSum([2, 7, 11, 15],9);//[0,1]
twoSum([3,1,6,9,5],11);//[2,4]
twoSum([7,4,2,3,2],9);//[0,2]
