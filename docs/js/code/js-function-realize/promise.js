
/**
 * 实现一个Promise
 */
class Promise {
    constructor(executor) {
        if (typeof executor !== 'function') {
            throw new Error('Promise resolve function')
        }
        this.status = 'pending';
        this.value = null;
        this.reason = null;
        this.reject = this.reject.bind(this);
        this.resolve = this.resolve.bind(this);
        this.onFulfilledCbs = []; // 成功回调函数队列
        this.onRejectedCbs = []; // 失败回调函数队列
        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e);
        }
    }

    resolve(val) {
        if (this.status === 'pending') {
            this.status = 'fulfilled';
            this.value = val;
            this.onFulfilledCbs.forEach(fn => fn(this.value))
        }
    }

    reject(err) {
        if (this.status === 'pending') {
            this.status = 'reject';
            this.reason = err;
            this.onRejectedCbs.forEach(fn => fn(this.reason));

        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled !== 'function' ? val => val : onFulfilled;
        onRejected = typeof onFulfilled !== 'function' ? reason => { throw this.reason } : onRejected;

        if (this.status === 'fulfilled') {
            setTimeout(() => {
                try {
                    this.onFulfilledCbs.push(value => {
                        setTimeout(() => {
                            try {
                                onFulfilled(value)
                            } catch (e) { reject(e) }
                        })
                    });
                } catch (e) {
                    this.reject(e)
                }
            })
        }
        if (this.status === 'rejected') {
            setTimeout(() => {
                try {
                    this.onRejectedCbs.push((reason) => {
                        setTimeout(() => {
                            try {
                                onRejected(reason)
                            } catch (e) { reject(e) }
                        })
                    });
                } catch (e) {
                    this.reject(e)
                }
            })
        }
    }
}