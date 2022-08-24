
function Promise(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    // 让其处理器函数立即执行
    try {
        executor(resolve, reject)
    } catch (err) {
        reject(err)
    }

    function resolve(value) {
        if(this.state === 'pending'){
            this.value = value;
            this.state = 'resolved'
        }

    }

    function reject(reason) {
        if(this.state === 'pending'){
            this.reason = reason;
            this.state = 'rejected'
        }
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    if(this.state === 'resolved'){
        if(typeof onFulfilled === 'function'){
            onRejected(this.value)
        }
    }
    if(this.state === 'rejected'){
        if(typeof onRejected === 'function'){
            onRejected(this.reason)
        }
    }
 }
