
/**
 * throttle 节流
 */

function throttle(fn, delay) {
    let last;
    return (...args) => {
        if (Date.now - last > delay) {
            fn.apply(this, args);
            last = Date.now;
        }
    }
}

function test() {
    console.log('------test throttle--------')
}

const a = throttle(test, 200);
a();
a();
a();
