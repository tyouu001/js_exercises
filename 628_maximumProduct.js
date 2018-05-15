/**
 * @param {number[]} nums
 * @return {number}
 */
/*给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积
注意:
给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。
输入的数组中任意三个数的乘积不会超出32位有符号整数的范围
*/
'use strict';
var maximumProduct = function(nums) {
    nums.sort((a,b) => {return a - b;});//从小到大排序，非单独sort()
    var len = nums.length,
        result;
    var min = nums[0],
        max = nums[len-1];
    if (len === 3)
        result = min * nums[1] * max;//长度为3直接乘
    else{
        if (min < 0){
            if (max > 0){//有正有负，最大数>0，最小数<0
                if (min * nums[1] > nums[len-2] * nums[len-3])
                    result = min * nums[1] * max;
                else
                    result = nums[len-2] * nums[len-3] * max;
            }else//所有数<=0
                result = nums[len-2] * nums[len-3] * max;
        }else//所有数>=0
            result = nums[len-2] * nums[len-3] * max;
    }
    return result;
};
maximumProduct([1,2,3]);//6
maximumProduct([-1,-2,0,4]);//8
maximumProduct([-1,-4,-2,-3]);//-6

//方法二（简便）：方法一中不难看出，不外乎两种乘法，直接比较
var maximumProduct = function(nums) {
    nums.sort((a,b) => {return a - b;});//从小到大排序，非单独.sort()
    var len = nums.length,
        min = nums[0],
        max = nums[len-1];
    var result1 = max * nums[len-2] * nums[len-3],//3个最大数相乘
        result2 = min * nums[1] * max;//2个最小数 & 最大数相乘
    return result1 > result2 ? result1 : result2;//用函数return Math.max(result1,result2);
};