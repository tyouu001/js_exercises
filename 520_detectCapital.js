/*
 * @param {string} word
 * @return {boolean}
 */
/*给定一个单词，你需要判断单词的大写使用是否正确。
我们定义，在以下情况时，单词的大写用法是正确的：
全部字母都是大写，比如"USA"。
单词中所有字母都不是大写，比如"leetcode"。
如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
否则，我们定义这个单词没有正确使用大写字母。
如：输入: "USA"，输出: True
   输入: "FlaG"，输出: False
*/
'use strict';
var detectCapitalUse = function(word) {
    var up='ABCDEFGHIJKLMNOPQRSTUVWXYZ',//列出所有大写
        low='abcdefghijklmnopqrstuvwxyz',//列出所有小写
        j = true;//设定标记
    var start = word[0];
    if (up.indexOf(start) > -1){//判断首字母是否大写
        if (up.indexOf(word[1]) > -1){//判断第二个字母是否大写
            for (let i=1;i<word.length;i++){//前两个字母大写的话，遍历是否全部大写，不是则false
                if (up.indexOf(word[i]) === -1)
                    j = false;
            }
        }else{//首字母大写，第二个字母小写
            for (let i=1;i<word.length;i++){//从第二个字母遍历是否全小写，不是则false
                if (low.indexOf(word[i]) === -1)
                    j = false;
            }
        }
    }else{//首字母小写
        for (let i=1;i<word.length;i++){//遍历是否全部小写，不是则false
            if (low.indexOf(word[i]) === -1)
                j = false;
        }
    }
    return j;
};
detectCapitalUse('USA');//true
detectCapitalUse('Flag');//true
detectCapitalUse('skdfg');//true
detectCapitalUse('USAfj');//false
detectCapitalUse('FlagNj');//false
detectCapitalUse('gdkgHmj');//false