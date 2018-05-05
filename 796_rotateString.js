/*
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
/*给定两个字符串, A 和 B。
A 的旋转操作就是将 A 最左边的字符移动到最右边。
例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea' 。
如果在若干次旋转操作之后，A 能变成B，那么返回True
如：输入: A = 'abcde', B = 'cdeab' 输出: true
*/
'use strict';
var rotateString = function(A, B) {
    var a,
        n = 1;
    if (A === B)//特殊情况，字符串相等也算
        return true;
    else{
        while (n < A.length){//最长旋转次数为字符串长度-1
            a = A.split('');//转为数组
            a.push(a[0]);//第一个元素添加到最后
            a.shift();//删除第一个元素
            A = a.join('');//转为字符串，判断
            if (A === B)
                return true;
            n ++;
        }
        return false;
    };
};
rotateString('abcde','cdeab');//true
rotateString('abcde','abced');//false
rotateString('abcde','abcde');//true