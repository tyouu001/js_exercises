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
            if (num_2 === num_1)//同样的元素不能被重复利用
                continue;
            else{
                sum = num_1 + num_2;
                if (sum === target){
                    arr.push(i,n);
                    return arr;
                };
            };
        };
    };
};
twoSum([2, 7, 11, 15],9);//[0,1]
twoSum([3,1,6,9,5],11);//[2,4]
twoSum([7,4,2,3,2],9);//[0,2]
twoSum([3,2,3,4],6);//[1,3]，同样的元素不能被利用

/*实际添加了判断相同元素的代码后反而不能通过，给的测试代码输入[3,3],输出[0,1]，此代码输出undefined
个人觉得此测试代码不严谨，题目有说同样元素不能被利用,不知这句话该如何正确理解？？？
*/
/*以下为通过的代码
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
*/
twoSum([2, 7, 11, 15],9);//[0,1]
twoSum([3,1,6,9,5],11);//[2,4]
twoSum([7,4,2,3,2],9);//[0,2]
twoSum([3,2,3,4],6);//实际输出[0,2]，正确为[1,3]，同样的元素不能被利用