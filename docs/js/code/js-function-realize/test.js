/**
 * 自己模拟实现
 */


function myInstance(target, origin) {

    let proto = Object.getPrototypeOf(target);
    const originPropto = origin.prototype;
    while (true) {
        if (!proto) {
            return false;
        }
        if (proto === originPropto) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
}

function _new(...args) {
    let constructor = args.shift();
    let obj = Object.create(constructor);
    let result = constructor.apply(obj, args);
    return (typeof result === "object" && result !== null) ? result : obj;
}

function jsonP(url) {
    let script = document.createElement('script');
    script.src = url;
    script.type = 'text/script';
    document.body.appendChild(script);

}

function debounce(fn,delay) {
    let timer = null;

    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this,arguments)
        },delay)
    }
}