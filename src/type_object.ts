/**
 * 浅层克隆
 * @param origin 被克隆对象
 * @param target 克隆对象
 */
 export const mappingObj = (origin: { [x: string]: any; }, target: object = {}) => {
    for (const prop in origin) {
        target[prop] = origin[prop];
    }
    return target;
}

/**
 * 深度克隆
 * @param origin 被克隆对象
 * @param target 克隆对象
 */
export function deepCloneObj (origin: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }, target: object = {}) {
    const toStr = Object.prototype.toString;
    for (const prop in origin) {
        if (origin.hasOwnProperty(prop)) {  // 查看自身属性是否存在
            // 判断是数组还是对象
            if (origin[prop] !== null && typeof (origin[prop]) === 'object') {
                target[prop] = toStr.call(origin[prop]) == '[object Array]' ? [] : {};
                deepCloneObj(origin[prop], target[prop]);  // 重新克隆子级
            } else {
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}

/**
 * 深度克隆对象
 * JSON.parse(JSON.stringify(obj))  // 此方法无法合并代理对象
 * @param obj 
 */
export function cloneObj (obj: any) {
    // 克隆算法
    if (obj instanceof Array) return cloneArray(obj);
    else if (obj instanceof Object) return cloneObject(obj);
    else return obj;
}
function cloneObject (obj: any) {
    let result = {};
    let names = Object.getOwnPropertyNames(obj);
    for (let i = 0; i < names.length; i ++) {
        result[names[i]] = cloneObj(obj[names[i]]);
    }
    return result;
}
function cloneArray (obj: any) {
    let result = new Array(obj.length);
    for (let i = 0; i < result.length; i ++) {
        result[i] = cloneObj(obj[i]);
    }
    return result;
}

/**
 * 获取对象的 value 值
 * @param obj 要查询的对象
 * @param name 对象的 key 值 “a.b”
 */
export function getValue (obj: any, name: string) {
    if (!obj) return;
    let nameList = name.split('.');
    let temp = obj;
    for (let i = 0; i < nameList.length; i ++) {
        if (temp[nameList[i]]) {
            temp = temp[nameList[i]];
        } else {
            return undefined;
        }
    }
    return temp;
}
// getValue({a: 1, b: {c: 3}}, 'b.c')  //--> 3

/**
 * 设置对象 value 值
 * @param obj  PS: {a: 1, b: {c: 3}}
 * @param data 要改变的 key 值  PS: a 或 b.c
 * @param value 设置 value
 */
export function setValue (obj: any, data: string, value: any) {
    if (!obj) return;
    let attrList = data.split('.');
    let temp = obj;
    for (let i = 0; i < attrList.length - 1; i ++) {
        if (temp[attrList[i]]) {
            temp = temp[attrList[i]];
        } else {
            return;
        }
    }
    if (temp[attrList[attrList.length - 1]] != null) {
        temp[attrList[attrList.length - 1]] = value;
    }
}