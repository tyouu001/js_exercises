/**
 * @param {number} n
 * @return {string[]}
 */
/*写一个程序，输出从 1 到 n 数字的字符串表示。
如果 n 是3的倍数，输出“Fizz”；如果 n 是5的倍数，输出“Buzz”；如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
n = 15,返回:["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/
'use strict';
var fizzBuzz = function(n) {
    var i,
        arr=[];
    for (i=1;i<=n;i++){
        if (i%3 === 0 && i%5 !== 0)//是3但非5的倍数
            arr.push('Fizz');
        else if (i%5 === 0 && i%3 !== 0)//是5但非3的倍数
            arr.push('Buzz');
        else if (i%15 === 0)//是3也是5，即15的倍数
            arr.push('FizzBuzz');
        else{
            x = i.toString();//输出的是字符串
            arr.push(x);
        }
    };
    return arr;
};
fizzBuzz(20);