
function _new() {
    let obj = new Object();
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    var result = Constructor.apply(obj, arguments);
    // return typeof 
}