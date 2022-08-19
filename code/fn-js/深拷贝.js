/**
 * 基础深拷贝【不适用于Map Set等数据结构】
 * @param {*} obj 
 * @returns 
 */
function deepClone(obj) {
    if (typeof obj === 'object') {
        var result = obj.constructor === Array ? [] : {}
        for (var i in obj) {
            result[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
        }
    } else {
        var result = obj;
    }
    return result;

}
var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
console.log(deepClone(obj1))



/**
 * 避免循环引用
 * 适用于Map Set Array等
 * @param {*} obj 
 * @param {*} map 
 * @returns 
 */
function cloneDeep(obj, map = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    const objFromMap = map.get(obj);
    if (objFromMap) {
        return objFromMap;
    }
    let target = {};
    map.set(obj, target)

    // Map
    if (obj instanceof Map) {
        target = new Map();
        obj.forEach((value, key) => {
            const v1 = cloneDeep(value);
            const k1 = cloneDeep(key);
            target.set(k1, v1);
        })
    }
    // Set
    if (obj instanceof Set) {
        target = new Set();
        obj.forEach((v) => {
            const v1 = cloneDeep(v,map);
            target.add(v1);
        })
    }

    // Array
    if(obj instanceof Array){
        target = obj.map(item=>cloneDeep(item,map))
    }

    // Object
    for(const key in obj){
        const val = obj[key];
        const val1 = cloneDeep(val,map)
        target[key] = val1;
    }

    return target;

}