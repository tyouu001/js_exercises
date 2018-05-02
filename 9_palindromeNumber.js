/*
 * @param {number} x
 * @return {boolean}
 */
/*判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数
如：输入: 121；输出: true
   输入: -121；输出: false
*/
var isPalindrome = function(x) {//转换为字符串再判断，不转换为字符串的还不会……
    var n;
    n = x.toString().split('').reverse().join('');
    if (x == n)
        return true;
    else
        return false;   
};
isPalindrome(121);//true
isPalindrome(-121);//false
isPalindrome(10);//false