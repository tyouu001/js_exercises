/*
 * @param {string} S
 * @return {number[][]}
 */
/*In a string S of lowercase letters, these letters form consecutive groups of the same character.
For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".
Call a group large if it has 3 or more characters.  
We would like the starting and ending positions of every large group.
The final answer should be in lexicographic order.
*/
'use strict';
var largeGroupPositions = function(S) {
    var count = 1,
        arr = [];
    for (let i=1;i<S.length;i++){
        if (S[i] === S[i-1])
            count ++;
        else{
            if (count >= 3)
               arr.push([i-count,i-1]);//索引添加进数组
            count = 1;
        };
    };
    if (count >= 3)//遍历完判断最后的group是否属于large group
        arr.push([S.length-count,S.length-1]);
    return arr;
};
largeGroupPositions("abbxxxxzzy");//[[3,6]]
largeGroupPositions("abc");//[]
largeGroupPositions("abcdddeeeeaabbbcd");//[[3,5],[6,9],[12,14]]
largeGroupPositions("aaa");//[[0,2]]