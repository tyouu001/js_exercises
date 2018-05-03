/*
 * @param {number} n
 * @return {boolean}
 */
/*编写一个算法来判断一个数是不是“快乐数”。
一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，
然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。
如果可以变为 1，那么这个数就是快乐数
输入: 19 输出: true
*/
'use strict';
var isHappy = function(n) {
    var m = n.toString();
    while (m.length > 1){
        var sum = 0;
        for (let i=0;i<m.length;i++){
            sum += m[i] * m[i];
        }
        m = sum.toString();
    };
    if (m == 1 || m == 7)
        return true;
    else
        return false;
};
isHappy(19);//true
isHappy(22);//false
