/**
 * @param {string} s
 * @return {string}
 */
/*编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
例：给定 s = "hello", 返回 "holle"
注意:元音字母不包括 "y"
*/
'use strict';
var reverseVowels = function(s) {
    var arr = [],//空数组用于添加字符串中的元音
        list = ['a','i','u','e','o','A','I','U','E','O'];//居然还有大写，被坑……
    var S = s.split('');//转为数组
    for (let i=0;i<S.length;i++)
        if (list.indexOf(S[i]) > -1){
            arr.push(S[i]);//所有元音添加至数组中
    };
    arr.reverse();//数组反转
    for (let n=0;n<S.length;n++){//再次遍历
        if (list.indexOf(S[n]) > -1){
            S.splice(n,1,arr[0]);//删除原有元音，添加反转后的元音
            arr.shift();//删除元音列表中添加过的元音
        }
    };
    return S.join('');//转为字符串
};
reverseVowels("hello");// "holle"
reverseVowels("leetcode");//"leotcede"
reverseVowels('aA');//'Aa'