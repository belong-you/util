/**
 * 生成重复字符串
 * @param str 传入字符串
 * @param n 重复次数
 */
export var cerateRepeatStr = function (str, n) {
    if (n === void 0) { n = 1; }
    var num = Math.abs(n), res = ''; // 防止传入负数，造成死循环
    while (num) {
        num % 2 === 1 && (res += str);
        num > 1 && (str += str);
        num >>= 1; // 左位移1位
    }
    return res;
};
/**
 * 计算字符串字节长度
 * @param str 传入字符串
 */
export var strBytesLength = function (str) {
    var len = str.length, i = 0;
    while (i < len) {
        str.charCodeAt(i) > 255 && len++; // .charCodeAt() 返回指定位置的字符的 Unicode 编码
        i++;
    }
    return len;
};
/**
 * 求一个字符串的 ascll 总和
 * @param str
 */
export var stringAscllSum = function (str) {
    var arr = str.split('');
    var num = 0;
    arr.forEach(function (val) {
        num += val.charCodeAt(0);
    });
    return num;
};
//# sourceMappingURL=type_string.js.map