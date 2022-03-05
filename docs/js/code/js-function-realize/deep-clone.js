
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