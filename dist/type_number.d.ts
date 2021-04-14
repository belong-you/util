/**
 * 生成随机数
 * @param max 最大值（取不到）
 * @param min 最小值
 */
export declare const randomNum: (max: number, min?: number) => number;
/**
 * 整数数字求和
 * @param args
 */
export declare const numberSum: (...args: number[]) => number;
/**
 * 数字生成器
 */
export declare function createNum(): Generator<number, void, unknown>;
/**
 * 浮点数数字求和，解决(0.1 + 0.2 != 0.3)的问题
 * @param args
 * @returns
 */
export declare const numberAdd: (...args: number[]) => number;
/**
 * 数字加密
 * @param num 手机号，银行卡号之类的数组或字符串
 * @param start 开始加密索引
 * @param end 结束加密索引
 */
export declare const numberEncrypt: (num: number | string, start?: number, end?: number) => string | undefined;
/**
 * 银行计数法
 * @param num
 * @returns
 */
export declare const blackCount: (num: number | string) => string | undefined;
/**
 * 小数转百分比
 * @param num
 * @param digit 保留小数位
 * @returns
 */
export declare const numberPercentage: (num: number | string, digit?: number) => string | undefined;
/**
 * 计算两点之间的距离
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @returns
 */
export declare const countTwoSpotlength: (x1: any, y1: any, x2: any, y2: any) => number;
