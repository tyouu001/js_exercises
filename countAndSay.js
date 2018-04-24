/*
 * @param {number} n
 * @return {string}
 */
/*报数序列是指一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
1. 1
2. 11
3. 21
4. 1211
5. 111221
给定一个正整数 n ，输出报数序列的第 n 项。输入：4，输出："1211"
注意：整数顺序将表示为一个字符串
*/
var countAndSay = function(n) {
    var new_arr=[];
    if (n===1)//个数1和2的单独列出
        new_arr = [1];
    else if (n===2)
        new_arr = [1,1];
    else{//3以上的循环遍历
        var x=3,
            arr=[1,1];//2的数组
        while (x<=n){
            new_arr=[];
            var num=1;
            for (let i=1;i<arr.length;i++){//从索引1开始遍历
                if (arr[i]===arr[i-1]){//当前与前一个比较
                    num++;//相同个数加一
                    if (i===arr.length-1)//判断是否最后一个数
                        new_arr.push(num,arr[i]);//添加最后一个数
                }else{
                    new_arr.push(num,arr[i-1]);//数字不同加入前一个数
                    num = 1;//个数格式化
                    if (i===arr.length-1)//判断是否最后一个数
                        new_arr.push(num,arr[i]);//添加最后一个数
                }
            }
            arr = new_arr;//新数组赋予为上一数组
            x++;
        }
    }
    return new_arr.join('');
};
countAndSay(4);
countAndSay(5);