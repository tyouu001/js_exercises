/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。
例如，
s = "anagram"，t = "nagaram"，返回 true
s = "rat"，t = "car"，返回 false
注意:
假定字符串只包含小写字母。
提升难度:
输入的字符串包含 unicode 字符怎么办？你能能否调整你的解法来适应这种情况？
*/
'use strict';
var isAnagram = function(s, t) {
    if (t.length === s.length){//转换为数组排序后比较
        var x = t.split('').sort().join(''),
            y = s.split('').sort().join('');
        if (x === y)
            return true;
        else
            return false;
    }else
        return false;
};
isAnagram("anagram","nagaram");//true
isAnagram("rat","car");//false
isAnagram("anagram","anagram");//true(应该是false才对)

/*相同的两个单词应该不是字母异位词，但测试通过，私认为应该多加上一个判断
var isAnagram = function(s, t) {
    if (s !== t){
        if (t.length === s.length){
            var x = t.split('').sort().join(''),
                y = s.split('').sort().join('');
            if (x === y)
                return true;
            else
                return false;
        }else
            return false;
    }else
        return false;
};
*/
