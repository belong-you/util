var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
/**
 * 生成随机数
 * @param max 最大值（取不到）
 * @param min 最小值
 */
export var randomNum = function (max, min) {
    if (min === void 0) { min = 0; }
    return Math.floor(Math.random() * (max - min) + min);
};
/**
 * 整数数字求和
 * @param args
 */
export var numberSum = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (s, item) { return s + item; }, 0);
};
/**
 * 数字生成器
 */
export function createNum() {
    var n;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                n = 0;
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, n];
            case 2:
                _a.sent();
                n++;
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
/**
 * 浮点数数字求和，解决(0.1 + 0.2 != 0.3)的问题
 * @param args
 * @returns
 */
export var numberAdd = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var intSum = 0, floatSum = 0;
    __spread(args).forEach(function (val) {
        var _a;
        var int = String(val).split('.')[0]; // 整数部位
        var float = (_a = String(val).split('.')[1]) !== null && _a !== void 0 ? _a : 0; // 小数部位
        intSum += Number(int);
        floatSum += Number(float);
    });
    return Number(intSum + '.' + floatSum);
};
/**
 * 数字加密
 * @param num 手机号，银行卡号之类的数组或字符串
 * @param start 开始加密索引
 * @param end 结束加密索引
 */
export var numberEncrypt = function (num, start, end) {
    if (start === void 0) { start = 3; }
    if (end === void 0) { end = -4; }
    if (!Number(num))
        return;
    var password = '';
    var startNum = String(num).slice(0, start);
    var encryptLen = String(num).slice(start, end).length;
    var endNum = String(num).slice(end);
    for (var i = 0; i < encryptLen; i++) {
        password += '*';
    }
    return startNum + password + endNum;
};
/**
 * 银行计数法
 * @param num
 * @returns
 */
export var blackCount = function (num) {
    if (!Number(num))
        return;
    var reg = /(?=(\B)(\d{3})+$)/g;
    return String(num).replace(reg, ",");
};
/**
 * 小数转百分比
 * @param num
 * @param digit 保留小数位
 * @returns
 */
export var numberPercentage = function (num, digit) {
    if (digit === void 0) { digit = 0; }
    if (!Number(num))
        return;
    return Math.abs(Number(num) * 100).toFixed(digit) + '%';
};
/**
 * 计算两点之间的距离
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @returns
 */
export var countTwoSpotlength = function (x1, y1, x2, y2) { return Math.hypot(x2 - x1, y2 - y1); };
//# sourceMappingURL=type_number.js.map