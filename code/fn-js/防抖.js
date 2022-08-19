

/**
 * debounce 防抖的作用以及实现
 */
function debounce(fn,delay) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this,args)
        },delay)
    }
}

function test(arg="test") {
    console.log('------test deboucne--------'+arg)
}


const a = debounce(test, 20);
setTimeout(() => {
    a(12);
},0)
a(1);
a(3);

a(5);

setTimeout(() => {
    a(8);
},0)