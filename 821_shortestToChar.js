/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
/*给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组
如：输入: S = "loveleetcode", C = 'e'
   输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
说明:
字符串 S 的长度范围为 [1, 10000]。
C 是一个单字符，且保证是字符串 S 里的字符。
S 和 C 中的所有字母均为小写字母。
*/
'use strict';
var shortestToChar = function(S, C) {
    var n = 0,
        arr = [],
        ind = S.indexOf(C, n);//查找字母所在位置
    while (ind > -1){
        if (n == 0){//第一个位置从0开始搜索
            n = ind + 1;//下一次搜索时开始的位置
            while (ind >= 0){
                arr.push(ind);//第一个目标位置之前的递减加入数组
                ind --;
            }
            ind = S.indexOf(C, n);
        }else{//第一和最后目标字母的中间段
            var diff = ind - n;
            n = ind + 1;
            if (diff == 0){//距离上一个目标位差为0，即两个目标字母挨着
                arr.push(0);
            }else{
                if (diff % 2 == 0){//中间间隔偶数位个字母
                    let i = 1,
                        half_diff = diff / 2;
                    while (i <= half_diff){//先递增再递减加入数组
                        arr.push(i);
                        i ++;
                    }
                    while (half_diff >= 0){
                        arr.push(half_diff);
                        half_diff --;
                    }
                }else{//中间间隔奇数位个字母
                    let i = 1,
                        half_diff = (diff + 1) / 2;
                    while (i <= half_diff){
                        arr.push(i);
                        i ++;
                    }
                    while (half_diff - 1 >= 0){//会少一位，计算不能错
                        arr.push(half_diff - 1);
                        half_diff --;
                    }
                }
            }
        }
        ind = S.indexOf(C, n);
    }//最后一个位置的目标字母
    var len = S.length,
        left = len - n,
        count = 1;
    while (left > 0 && count <= left){
        arr.push(count);//递增加入数组
        count ++;
    }
    return arr;
};

var result = shortestToChar("loveleetcode",'e');
console.log(result.toString());