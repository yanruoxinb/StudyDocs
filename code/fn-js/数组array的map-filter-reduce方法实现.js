
/**
 * 实现原生的Array.map
 * @param {*} fn 
 * @param {*} context 
 * @returns 
 */
Array.prototype._myMap = (fn, context) => {

    if (typeof fn !== 'function') {
        throw new TypeError('回调函数必须是函数类型')
    }
    const array = this;
    let resultArr = [];
    for (let i = 0; i < array.length; i++) {
        let res = fn.apply(context, array[i], i, array);
        resultArr.push(res)
    }
    return resultArr;
}

/**
 * 实现原生的Array.filter
 * @param {*} fn 
 * @param {*} context 
 * @returns 
 */
Array.prototype._myFilter = (fn, context) => {
    if (typeof fn !== 'function') {
        throw new TypeError('回调函数必须是函数类型')
    }
    const array = this;
    let resultArr = [];
    for (let i = 0; i < array.length; i++) {
        let res = fn.apply(context, array[i], i, array);
        if (res) {
            resultArr.push(array[i])
        }
    }
    return resultArr;
}

/**
 * 实现原生的Array.reduce
 * @param {*} fn 
 * @param {*} initialValue 
 * @returns 
 */
Array.prototype._myReduce = (fn, initialValue) => {
    if (typeof fn !== 'function') {
        throw new TypeError('回调函数必须是函数类型')
    }
    const array = this;
    let base = typeof initialValue === 'undefined' ? array[0] : initialValue
    let startIndex = typeof initialValue === 'undefined' ? 1 : 0
    array.slice(startIndex).forEach((val, index) => {
        base = fn.apply( base, val, startIndex + index, array)
    })
    // for (let i = 0; i < array.length; i++) {
    //     let res = fn.apply(context, array[i], i, array);
    //     if (res) {
    //         resultArr.push(array[i])
    //     }
    // }
    return base;
}





