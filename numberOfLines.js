/*
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
/*我们要把给定的字符串 S 从左到右写到每一行上，每一行的最大宽度为100个单位，如果我们在写某个字母的时候会使这行
超过了100 个单位，那么我们应该把这个字母写到下一行。我们给定了一个数组 widths ，这个数组 widths[0] 代表 
'a' 需要的单位， widths[1] 代表 'b' 需要的单位，...， widths[25] 代表 'z' 需要的单位。
现在回答两个问题：至少多少行能放下S，以及最后一行使用的宽度是多少个单位？将你的答案作为长度为2的整数列表返回。
输入:widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
    S = "bbbcccdddaaa"
输出：[2, 4]除去字母'a'所有的字符都是相同的单位10，并且字符串 "bbbcccdddaa" 将会覆盖 9 * 10 + 2 * 4 = 98 个单位
     最后一个字母 'a' 将会被写到第二行，因为第一行只剩下2个单位了,所以，这个答案是2行，第二行有4个单位宽度
注意：字符串 S 的长度在 [1, 1000] 的范围; S 只包含小写字母;
    widths 是长度为 26的数组; widths[i] 值的范围在 [2, 10]
*/
'use strict';
var numberOfLines = function(widths, S) {
    var sum=0,
        line=1,
        arr=[];
    for (let i=0;i<S.length;i++){//遍历S,找到每个字母对应的长度
        let n = S[i].charCodeAt(0)-97;
        if ((sum+widths[n]) <= 100){//每行不满100直接加
            sum += widths[n];
        }else{//每行超过100，当前字母长度写下行，行数+1
            line ++;
            sum = widths[n];
        }
    };
    arr.push(line,sum);
    return arr;
};
numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
    "abcdefghijklmnopqrstuvwxyz");//[3,60]
numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
    "bbbcccdddaaa");//[2,4]
numberOfLines([2,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,2,3,4,5,6,7,8],
    "tyouuzhangtyouuzhang");//[2,7]