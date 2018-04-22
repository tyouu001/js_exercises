/**
 * @param {string} s
 * @return {number}
 */
/*给定一个Excel表格中的列名称，返回其相应的列序号
示例:A -> 1,B -> 2,C -> 3...Z -> 26,AA -> 27,AB -> 28
分解：A~Z -> 1~26; AA~AZ -> 26+（1~26）;BA~BZ -> 26*2+(1~26)...ZA~ZZ -> 26*26+(1~26)
    AAA~AAZ -> 26*26+26*1+（1~26）...ABA~ABZ -> 26*26+26*2+(1~26)
*/
'use strict';//这种方法用时久？首次上传提示超过时间限制...
var titleToNumber = function(s) {//简化为10进制改为26进制
    var i,
        len = s.length,
        arr=[],
        sum=0;
    for (i=0;i<len;i++){//每个字母转换为数字后存在Array中
        arr.push(s.split('')[i].charCodeAt(0)-64);
    };
    return arr.reduce(function(x,y){ return x * 26 + y;});
};
titleToNumber('A');//1
titleToNumber('BA');//53
titleToNumber('AAC');//705