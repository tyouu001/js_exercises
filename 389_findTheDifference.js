/*
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
/*给定两个字符串 s 和 t，它们只包含小写字母。
字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
请找出在 t 中被添加的字母
如：输入：s = "abcd"，t = "abcde"，输出：e
*/
'use strict';
var findTheDifference = function(s, t) {
    var arr=t.split('');//字符串改数组
    for (let i=0;i<s.length;i++){
        for (let n=0;n<arr.length;n++){
            if (s[i]===arr[n]){
                arr.splice(n,1);
                break;//第一个相同的字母删了后退出循环，防止将相同的字母重复删
            };
        };
    };
    return arr[0];//数组中应该剩下唯一的一个字母
};
findTheDifference('abcd','abcde');//'e'
findTheDifference("vgrdhns","hsrfngvd");//'f'
findTheDifference('ae','aea');//'a',这个第一次没过，因为没加break