/*
 * @param {number[]} nums
 * @return {number}
 */
/*给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在众数
*/
'use strict';
var majorityElement = function(nums) {//比较呆的方法……
    var arr=nums.sort(),
        count=1;
    if (arr.length===1)//长度为1的单独拎出来
        return arr[0];
    else{
        for (let i=1;i<arr.length;i++){
            if (arr[i]===arr[i-1]){
                count++;
            }else{
                if (count > arr.length/2)
                    return arr[i-1];
                else
                    count = 1;
            };
        };
        if (count > arr.length/2)//循环完判断最后相同的元素的个数
            return arr[arr.length-1];
    };
};
majorityElement([1]);//1
majorityElement([3,2,3]);//3
majorityElement([2,2,1,1,1,2,2]);//2
//以下是大神的用时很短的代码
var majorityElement = function (nums) {
    var count=0,
        num;
    nums.forEach(function (v) {
        if(count===0){
            num=v;
        }
        count+=(num===v)?1:-1;
    });
    return num;
};

//以下代码超时，囧……
'use strict';
var majorityElement = function(nums) {
    if (nums.length === 1)//数组长度为1的情况单独列出
        return nums[0];
    else{
        for (let i=0;i<nums.length;i++){
            var count=1;
            for (let n=i+1;n<nums.length;n++){
                if (nums[n]===nums[i])
                    count ++;
            };
            if (count > nums.length/2)//超过总数一半认为是众数
                return nums[i];
        };
    };
};

