/*
 * @param {number} n
 * @return {boolean}
 */
/*给定一个整数，写一个函数来判断它是否是 2 的幂次方
*/
'use strict';
var isPowerOfTwo = function(n) {
    var j = true;
    if (n <= 0)//排除非正整数
        j = false;
    while (n >= 2){
        if (n % 2 === 0){
            n = n / 2;
            continue;
        }else{
            j = false;
            break;
        };
    };
    return j;
};
isPowerOfTwo(1);//true
isPowerOfTwo(16);//true
isPowerOfTwo(218);//false

/*用时少一：
var isPowerOfTwo = function(n){
    while (n >= 2){
        n /= 2;
    };
    if (n == 1)
        return true;
    return false;
};

用时少二：
var isPowerOfTwo = function(n){
    return n > 0 && (n & n - 1) === 0;
};
*/
