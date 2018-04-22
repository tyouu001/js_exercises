/*
 * @param {string[]} words
 * @return {string[]}
 */
/*给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词
输入: ["Hello", "Alaska", "Dad", "Peace"],输出: ["Alaska", "Dad"]
注意：你可以重复使用键盘上同一字符;你可以假设输入的字符串将只包含字母
*/
'use strict';
var findWords = function(words) {
    var i,
        n,
        arr=[],
        line_1 = ['q','w','e','r','t','y','u','i','o','p'],
        line_2 = ['a','s','d','f','g','h','j','k','l'],
        line_3 = ['z','x','c','v','b','n','m'];
    for (i=0;i<words.length;i++){//遍历列表，判断每个单词首字母在键盘哪一行(值a)
        let a,
            single = words[i],
            s = single[0].toLowerCase(),
            j = true;
        if (line_1.indexOf(s) !== -1)
            a = 1;
        else if (line_2.indexOf(s) !== -1)
            a = 2;
        else if (line_3.indexOf(s) !== -1)
            a = 3;
        for (n=1;n<single.length;n++){/*遍历单词每个字母，判断(值b)是否和首字母(值a)同一行
                                       默认相同true，否则为false*/
            let b,
                x = single[n].toLowerCase();//没想到首字母以外还有大写字母，被测试用例坑了...
            if (line_1.indexOf(x) !== -1)
                b = 1;
            else if (line_2.indexOf(x) !== -1)
                b = 2;
            else if (line_3.indexOf(x) !== -1)
                b = 3;
            if (b !== a)
                j = false;
        }; 
        if (j)//符合的添加到空列表中
            arr.push(single);
    };
    return arr;
};
findWords(["Hello", "Alaska", "Dad", "Peace"]);//['Alaska', 'Dad']