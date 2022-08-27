
function Promise(callback) {
    this.status = 'pending';
    this.value = null;
    this.reason = null;
    this.onRejectCallBackArr = [];
    this.onResolveCallBackArr = [];

    const reslove = (value) => {
        setTimeout(() => {
            if (value instanceof Promise) {
                return value.then(resolve, reject);
            }
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
                this.onResolveCallBackArr.forEach(func => {
                    func(value);
                })
            }
        })  
    }

    const reject = (reason) => {
        setTimeout(() => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
                this.onRejectCallBackArr.forEach(func => {
                    func(reason);
                })
            }
        })
        
    }
    callback(reslove,reject)
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : data => data
    onRejected = typeof onRejected === 'function' ?onRejected: error => { console.log(error)};
    let promise2;
    if (this.status === 'fulfilled') {
        return promise2 = new Promise((resolve,reject) => {
            setTimeout(() => {
                try {
                    let result = onFulfilled(this.value);
                    resolve(result);
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
    if (this.status === 'rejected') {
        return promise2 = new Promise((resolve,reject) => {
            setTimeout(() => {
                try {
                    let result = onRejected(this.value);
                    resolve(result);
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
    if (this.status === 'pending') {
        this.onRejectCalBalckArr.push(onRejected);
        this.onResolveCallBackArr.push(onFulfilled);
        
        return promise2 = new Promise((resolve, reject) => {
            this.onResolveCallBackArr.push(() => {
                try {
                    let result = onFulfilled(this.value);
                    resolve(result);
                } catch (e) {
                    reject(e)
                }
            })
            this.onRejectCallBackArr.push(() => {
                try {
                    let result = onFulfilled(this.value);
                    resolve(result);
                } catch (e) {
                    reject(e)
                }
            })
                
        })
    }
}

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1111111');
    },200)
})
promise.then(data => {
    console.log('-----data1---', data)
    return new Promise((reslove,reject) => {
        setTimeout(() => {
            reslove('2222222');
        },4000)
    })
}).then((datas) => {
    console.log(datas)
})