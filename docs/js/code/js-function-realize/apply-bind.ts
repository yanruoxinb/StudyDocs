/**
 * 实现 apply
 */
Function.prototype.apply = function (context) {
  const key = Symbol("key");
  context[key] = this;
  let res;
  if (arguments[1]) {
    res = context[key](...arguments[1]);
  } else {
    res = context[key]();
  }
  delete context[key];
  return res;
};

/**
 * 实现call
 */
Function.prototype.call = function (context = globalThis) {
    const key = Symbol('key');
    context[key] = this;
    const args = [...arguments].slice(1);
    const res = context[key](...args);
    delete context[key];
    return res;
};


/**
 * 实现bind 函数
 */
Function.prototype.bind = function (context = globalThis) {
  var that = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    return that.apply(context, args);
  };
};

