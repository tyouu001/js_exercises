/*
 * @param {number[]} nums
 * @return {number}
 */
/*给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
说明：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
如：输入: [2,2,1]，输出：1；输入: [4,1,2,1,2]，输出：4
*/
'use strict';
var singleNumber = function(nums) {
    for (let i=0;i<nums.length;i++){
        var x = nums[i],
            j = false;//设定标志
        for (let n=i+1;n<nums.length;n++){
            if (nums[n] === x){
                j = true;//找到相同数的修改标志
                nums.splice(n,1);//相同的数第二个删除
                break;
            };
        };
        if (!j)
            return x;
    };
};
singleNumber([2,2,1]);//1
singleNumber([4,1,2,1,2]);//4
singleNumber([1,6,2,1,7,3,2,6,3,4,7]);//4