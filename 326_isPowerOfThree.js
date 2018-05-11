/*
 * @param {number} n
 * @return {boolean}
 */
/*给出一个整数，写一个函数来确定这个数是不是3的一个幂。
后续挑战：你能不使用循环或者递归完成本题吗？
*/
'use strict';
var isPowerOfThree = function(n) {//同231题2的幂，用了循环，不用循环的还不会
    while (n >= 3){
        if (n % 3 !== 0)
            return false;
        else
            n /= 3;
    };
    if (n === 1)
        return true;
    else
        return false;
};
isPowerOfThree(1);//true
isPowerOfThree(27);//true
isPowerOfThree(18);//false