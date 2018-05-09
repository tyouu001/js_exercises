/*
 * @param {number[]} nums
 * @return {number[]}
 */
/*给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
找到所有在 [1, n] 范围之间没有出现在数组中的数字。
您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内
*/
'use strict';
var findDisappearedNumbers = function(nums) {//超过时间限制，衰……
    var arr = [];
    for (let i=1;i<=nums.length;i++){
        if (nums.indexOf(i) < 0)
            arr.push(i);
    };
    return arr;
};
findDisappearedNumbers([4,3,2,7,8,2,3,1]);//[5,6]