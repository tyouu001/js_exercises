/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
/*假设你是一位很棒的家长，想要给你的孩子们一些小饼干。
但是，每个孩子最多只能给一块饼干。对每个孩子 i ，都有一个胃口值 gi ，这是能让孩子们满足胃口的饼干的最小尺寸；
并且每块饼干 j ，都有一个尺寸 sj 。如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。
你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
注意：你可以假设胃口值为正。一个小朋友最多只能拥有一块饼干。
例：输入: [1,2,3], [1,1] 输出: 1
解释: 
你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
所以你应该输出1。
*/
var findContentChildren = function(g, s) {
    g.sort(function(a,b){//sort排序非简单数字大小排序！切记！
        return a - b;
    });
    s.sort(function(a,b){
        return a - b;
    });
    var count = 0;
    for (let i=0;i<s.length;i++){
        if (g.length === 0)
            break;
        for (let n=0;n<g.length;n++){
            if (s[i] >= g[n]){
                count ++;
                g.splice(n,1);
                break;
            }
        }
    }
    return count;
};
findContentChildren([1,2,3], [1,1]);//1
findContentChildren([1,2], [1,2,3]);//2
findContentChildren([1,1,4,2,3,1],[2,3,1,2,1,3,2]);//5

var findContentChildren = function(g, s) {
    g.sort(function(a,b){
        return a - b;
    });
    s.sort(function(a,b){
        return a - b;
    });
    var count = 0;
    for (let i=0;i<s.length;i++){//少了一个循环，直接和删除后的g列表比较
        if (g.length === 0)
            break;
        if (s[i] >= g[0]){
            count ++;
            g.splice(0,1);
        }
    }
    return count;
};