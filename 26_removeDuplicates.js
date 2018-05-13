/**
 * @param {number[]} nums
 * @return {number}
 */
/*给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成
例：给定数组 nums = [1,1,2], 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
   你不需要考虑数组中超出新长度后面的元素

说明:为什么返回数值是整数，但输出的答案是数组呢?
    请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的
*/
'use strict';
var removeDuplicates = function(nums) {//此方法通过
    for (let i=1;i<nums.length;i++){
        if (nums[i] === nums[i-1]){
            nums.splice(i,1);//相同的元素删除
            i --;//删除变动后索引号回到前一个
        };
    };
    return nums.length;
};
removeDuplicates([1,1,2]);//[1,2]
removeDuplicates([0,0,1,1,1,2,2,3,3,4]);//[0,1,2,3,4]


var removeDuplicates = function(nums) {//leetcode测试结果不对，与自己测试结果不同（难道是使用额外数组空间？）
    var n;
    n = nums.filter(function(element,index,self){
        return self.indexOf(element) === index;
    });
    // console.log(n);
    // console.log(n.length);
    return n.length; //对于返回值是整数却输出数组还是不太懂……
};
removeDuplicates([1,1,2]);//[1,2]
removeDuplicates([0,0,1,1,1,2,2,3,3,4]);//[0,1,2,3,4]