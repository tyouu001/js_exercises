/**
 * @param {number[]} nums
 * @return {number}
 */
/*给定一个二进制数组， 计算其中最大连续1的个数
如输入: [1,1,0,1,1,1]，输出: 3
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3
注意：输入的数组只包含 0 和1；输入数组的长度是正整数，且不超过 10,000。*/

'use strict';
var findMaxConsecutiveOnes = function(nums) {
    var i,
        l,
        n=0,
        x=0;
    for (i=0;i<nums.length;i+=l){//判断连续的第一个数是否为1
        if (nums[i] === 1){
            let n=1;
            for (l=i+1;l<nums.length;l++){//判断1后面有几个连续
                if (nums[l]===1 && nums[l]===nums[l-1])
                    n++
                else{//定义l使退出后的循环从最新的继续
                    l = l-i+1;
                    break;
                }
            };
            if (n>x){//大的连续数替换之前小的
                x = n;
            };
        }
        else{//不符合的循环依次加1
            l = 1;
            continue;
        };
    };
    return x;
};
findMaxConsecutiveOnes([1,1,0,1,1,1]);//3
findMaxConsecutiveOnes([1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1]);//4
findMaxConsecutiveOnes([0,0,0,1,0,1,1,0,0,1,1]);//2