/*
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
/*给定一个只包含小写字母的有序数组letters 和一个目标字母 target，
寻找有序数组里面比目标字母大的最小字母。
数组里字母的顺序是循环的。
举个例子，如果目标字母target = 'z' 并且有序数组为 letters = ['a', 'b']，则答案返回 'a'
注:letters长度范围在[2, 10000]区间内。letters 仅由小写字母组成，最少包含两个不同的字母。
目标字母target 是一个小写字母。
*/
'use strict';
var nextGreatestLetter = function(letters, target) {
    letters.sort();//从小到大排序
    var len = letters.length;
    if (target < letters[0] || target >= letters[len-1])//目标值小于任何数或大于任何数，返回数组最小值
        return letters[0];
    /*else if (target >= letters[len-1])
        return letters[0];与上一条合并*/
    else{
        for (let i=0;i<len;i++){
            if (letters[i] > target)
                return letters[i];
        };
    };
};
nextGreatestLetter(["c", "f", "j"],"a");//"c"
nextGreatestLetter(["c", "f", "j"],"c");//"f"
nextGreatestLetter(["c", "f", "j"],"d");//"f"
nextGreatestLetter(["c", "f", "j"],"g");//"j"
nextGreatestLetter(["c", "f", "j"],"j");//"c"
nextGreatestLetter(["c", "f", "j"],"k");//"c"