/**
 * @param {number[]} nums
 * @return {number}
 */
/*在一个给定的数组nums中，总是存在一个最大元素 。
查找数组中的最大元素是否至少是数组中每个其他数字的两倍。
如果是，则返回最大元素的索引，否则返回-1
例：输入: nums = [3, 6, 1, 0] 输出: 1
解释: 6是最大的整数, 对于数组中的其他整数,
6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1
*/
'use strict';
var dominantIndex = function(nums) {
    if (nums.length === 1)
        return 0;
    var x = 0;
    for (let i=1;i<nums.length;i++){//查找最大数索引
        if (nums[i] > nums[x])//和最大数对比，最大数的索引赋值
            x = i;
    };
    nums.sort(function(a,b){//划重点！Array的sort()默认元素转为String后根据ASCII码排序！！！非简单数字大小排序！
        return a - b;
    });
    var max = nums[nums.length-1];
    //排序后判断最大数是否为次大数的2倍以上
    return max >= nums[nums.length-2] * 2 ? x : -1;
};
dominantIndex([1,2,16,35,44,100,27,0]);//5
