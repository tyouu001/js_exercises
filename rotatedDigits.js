/*
 * @param {number} N
 * @return {number}
 */
/*我们称一个数 X 为好数, 如果它的每位数字逐个地被旋转 180 度后，我们仍可以得到一个有效的，且和 X 不同的数。
要求每位数字都要被旋转。
如果一个数的每位数字被旋转以后仍然还是一个数字， 则这个数是有效的。
0, 1, 和 8 被旋转后仍然是它们自己；2 和 5 可以互相旋转成对方；
6 和 9 同理，除了这些以外其他的数字旋转以后都不再是有效的数字
*/
'use strict';
var rotatedDigits = function(N) {
    var num=0;
    for (let x=1;x<=N;x++){
        var n = x.toString(),//数字转字符串
            j = false;//默认不符合情况
        for (let i=0;i<n.length;i++){
            let e=n[i];
            if (e==0 || e==1 || e==2 || e==5 || e==6 || e==8 || e==9){//含有这些数字的才有效
                if (e==2 || e==5 || e==6 || e==9){//排除0、1、8的旋转成相同数字
                    j=true;
                    continue;
                }
            }else{//含有3、4、7的不符合情况
                j=false;
                break;
            };
        }
        if(j){//遍历完后符合情况的再加一
            num++;
        }
    };
    return num;
};
rotatedDigits(10);//4
rotatedDigits(20);//9
rotatedDigits(49);//15