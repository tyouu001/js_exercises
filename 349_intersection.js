/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/*给定两个数组，写一个函数来计算它们的交集。
例子:给定 num1= [1, 2, 2, 1], nums2 = [2, 2], 返回 [2].
提示:每个在结果中的元素必定是唯一的;我们可以不考虑输出结果的顺序
*/
'use strict';
var intersection = function(nums1, nums2) {
    var arr=[];
    for (let i=0;i<nums2.length;i++){
        var x = nums2[i];
        for (let n=0;n<nums1.length;n++){
            if (nums1[n] === x){
                arr.push(x);//交集加到空数组中
                break;
            }
        }
    }
    return arr.filter(function(element,index,self){//筛选交集，剔除重复，保证元素唯一
        return self.indexOf(element) === index;
    });
};
intersection([1, 2, 2, 1],[2,2]);//[2]
intersection([1, 2, 2, 1,3],[2,2,3]);//[2,3]
intersection([],[]);//[]