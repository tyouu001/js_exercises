/*
 * @param {string} s
 * @return {boolean}
 */
/*给定一个字符串来代表一个学生的出勤纪录，这个纪录仅包含以下三个字符：
'A' : Absent，缺勤
'L' : Late，迟到
'P' : Present，到场
如果一个学生的出勤纪录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。
你需要根据这个学生的出勤纪录判断他是否会被奖赏。
如：输入: "PPALLP" 输出: True ；  输入: "PPALLL" 输出: False
*/
var checkRecord = function(s) {
    var count = 0,
        n = 1;
    for (let i=0;i<s.length;i++){
        if (s[i] === 'L' && s[i] === s[i-1])//连续的L，数量加1
            n ++;
        else{
            n = 1;//L不连续后，计数归1
            if (s[i] === 'A')
                count ++;
        }
        if (n > 2)//循环内判断，2个以上L返回false
            return false;
    };
    if (count > 1)//判断A数量
        return false;
    else
        return true;
};
checkRecord('LLPPPLL');//true