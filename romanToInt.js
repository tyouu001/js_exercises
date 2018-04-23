/*
 * @param {string} s
 * @return {number}
 */
/*罗马数字转整数*/
'use strict';
var romanToInt = function(s) {
    var i,
        sum=0,
        m=new Map([['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]]);//构建键值对
    for (i=0;i<s.length;i++){
        if (m.get(s[i-1]) < m.get(s[i])){//若后一数大于前一数，要减去前一数*2(因为前一数加过一遍)
            sum += ( m.get(s[i]) - 2 * m.get(s[i-1]) );
        }else{//若后一数小于前一数，正常加
            sum += m.get(s[i]);
        };
    };
    return sum;
};
romanToInt('III');//3
romanToInt('IV');//4
romanToInt('LVIII');//58
romanToInt('MCMXCIV');//1994