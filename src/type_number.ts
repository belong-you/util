/**
 * 生成随机数
 * @param max 最大值（取不到）
 * @param min 最小值
 */
export const randomNum = (max: number, min: number = 0) => {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 整数数字求和
 * @param args
 */
export const numberSum = (...args: number[]) => {
    return args.reduce((s, item) => s + item, 0)
}

/**
 * 数字生成器
 */
export function *createNum() {  // 生成器函数传参毫无意义
    let n = 0
    while (true) {
        yield n;
        n++;
    }
}

/**
 * 浮点数数字求和，解决(0.1 + 0.2 != 0.3)的问题
 * @param args 
 * @returns 
 */
export const numberAdd = (...args: number[]) => {
    let intSum = 0, floatSum = 0;
    [...args].forEach((val: number) => {
        const int = String(val).split('.')[0];  // 整数部位
        const float = String(val).split('.')[1] ?? 0;  // 小数部位
        intSum += Number(int);
        floatSum += Number(float);
    });
    return Number(intSum + '.' + floatSum);
}

/**
 * 数字加密
 * @param num 手机号，银行卡号之类的数组或字符串
 * @param start 开始加密索引
 * @param end 结束加密索引
 */
export const numberEncrypt = (num: number | string, start = 3, end = -4) => {
    if(!Number(num)) return;
    let password = '';
    const startNum = String(num).slice(0, start);
    const encryptLen = String(num).slice(start, end).length;
    const endNum = String(num).slice(end);
    for (let i = 0; i < encryptLen; i ++) {
        password += '*';
    }
    return startNum + password + endNum;
}

/**
 * 银行计数法
 * @param num 
 * @returns 
 */
export const blackCount = (num: number | string) => {
    if(!Number(num)) return;
    const reg = /(?=(\B)(\d{3})+$)/g;
    return String(num).replace(reg, ",");
}

/**
 * 小数转百分比
 * @param num 
 * @param digit 保留小数位
 * @returns 
 */
export const numberPercentage = (num: number | string, digit = 0) => {
    if(!Number(num)) return;
    return Math.abs(Number(num) * 100).toFixed(digit) + '%';
}

/**
 * 计算两点之间的距离
 * @param x1 
 * @param y1 
 * @param x2 
 * @param y2 
 * @returns 
 */
export const countTwoSpotlength = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);
