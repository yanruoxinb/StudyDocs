
Promise.prototype.all = (promiseArr) => {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promiseArr)) {
            throw new TypeError(`${promiseArr} is not array `)
        }
        let promiseCount = promiseArr.length;
        let finishCount = 0;
        let resolvedValues = [];

        for (let i = 0; i < promiseCount; i++) {
            (function (i) {
                Promise.resolve(promiseArr[i]).then((value) => {
                    finishCount++;
                    resolvedValues[i] = value;
                    if (finishCount === promiseCount) {
                        return resolve(resolvedValues)
                    }
                }, function (reason) {
                    return reject(reason)
                })
            })(i)
        }
    })

}