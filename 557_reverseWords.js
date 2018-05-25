/**
 * @param {string} s
 * @return {string}
 */
/*给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序
如：输入: "Let's take LeetCode contest"
    输出: "s'teL ekat edoCteeL tsetnoc"
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格
*/
'use strict';
var reverseWords = function(s) {
    var arr = s.split(' ');//长字符串依据空格拆分成数组
    var arr_1 = [];
    for (let i=0;i<arr.length;i++){
        var ind = arr[i];//拆分后的单词
        for (let n=ind.length-2;n>=0;n--){
            ind = ind + ind[n];//依次将字母添加到字符串后面    
        }
        var num = (ind.length - 1) / 2;
        ind = ind.substring(num);//将前面多余的字母删除，取子串
        arr_1.push(ind);
    }
    return arr_1.join(' ');
};
var result = reverseWords("Let's take LeetCode contest");
console.log(result);

var reverseWords = function(s) {
    var arr = s.split(' ');//长字符串依据空格拆分成数组
    var arr_1 = [],
        string = '';
    for (let i=0;i<arr.length;i++){
        var ind = arr[i];//拆分后的单词
        for (let n=ind.length-1;n>=0;n--){
            string += ind[n];//依次倒着将字母添加到空字符串   
        }
        arr_1.push(string);
        string = '';
    }
    return arr_1.join(' ');
};
var result = reverseWords("Let's take LeetCode contest");
console.log(result);

//网友简便方法
var reverseWords = function(s) {
    return s.split(' ').map(item => item.split('').reverse().join('')).join(' ');
};