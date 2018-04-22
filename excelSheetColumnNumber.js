/**
 * @param {string} s
 * @return {number}
 */
/*给定一个Excel表格中的列名称，返回其相应的列序号
示例:A -> 1,B -> 2,C -> 3...Z -> 26,AA -> 27,AB -> 28
分解：A~Z -> 1~26; AA~AZ -> 26+（1~26）;BA~BZ -> 26*2+(1~26)...ZA~ZZ -> 26*26+(1~26)
    AAA~AAZ -> 26*26+26*1+（1~26）...ABA~ABZ -> 26*26+26*2+(1~26)
*/
'use strict';
var titleToNumber = function(s) {
    var i,
        len = s.length,
        n,
        x=s.split('').reverse(),//字符串拆成数组后倒序
        sum=0;
    for (i=0;i<len;i++){//从最小位个位开始遍历
        n = (x[i].charCodeAt(0)-64) * (Math.pow(26,i));//个位*1（26的0次方），十位*26，百位*26的平方...
        sum += n;
    };
    return sum;
};
titleToNumber('A');//1
titleToNumber('BA');//53
titleToNumber('AAC');//705