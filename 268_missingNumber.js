/*
 * @param {number[]} nums
 * @return {number}
 */
/*给出一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数
如：输入: [3,0,1]，输出: 2；输入: [9,6,4,2,3,5,7,0,1]，输出: 8
注意事项:
您的算法应该以线性复杂度运行。你能否仅使用恒定的额外空间复杂度来实现它？
*/
'use strict';
var missingNumber = function(nums) {//用完整的序列匹配nums，缺少的数返回
    for (var i=0;i<=nums.length;i++){
        if (nums.indexOf(i) === -1)
            return i;
    };
};
missingNumber([3,0,1]);//2
missingNumber([9,6,4,2,3,5,7,0,1]);//8

//求和后算差，即为缺少数（此方法更简便）
var missingNumber2 = function(nums){
    var sum = (1+nums.length) * nums.length / 2;
    return sum - nums.reduce((a,b) => a+b);
};