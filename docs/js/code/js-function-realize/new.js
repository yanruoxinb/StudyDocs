
function _new() {
    let obj = new Object();
    let Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    var result = Constructor.apply(obj, arguments);
    return (typeof result === 'object' && result !== null) ? result : obj;
}

function MyNew(...args) {
    let Constructor = args.shift();
    let obj = Object.create(Constructor);
    let result = Constructor.apply(obj, args);
    return (typeof result === 'object' && result !== null) ? result : obj;
}