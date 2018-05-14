/**
 * @param {number[]} digits
 * @return {number[]}
 */
/*给定一个非负整数组成的非空数组，在该数的基础上加一，返回一个新的数组。
最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头
例：输入: [1,2,3]  输出: [1,2,4]
   解释: 输入数组表示数字 123
*/
'use strict';
var plusOne = function(digits) {
    var len = digits.length;
    for (let i=len-1;i>=0;i--){
        if (digits[i] === 9)//从末尾遍历是否有9
            digits[i] = 0;
        else{
            digits[i] ++;
            return digits;//非都是9，直接输出结果
        };
    };
    digits.unshift(1);//若都是9，开头增加1
    return digits;
};
plusOne([4,3,2,1]);//[4,3,2,2]
plusOne([9]);//[1,0]
plusOne([9,9,9]);//[1,0,0,0]