## this

> `this` 是在运行时绑定的，并不是在编写是绑定的，它的上下文取决于函数调用时的各种条件。`this`的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

- 在函数体中，非严格模式下默认绑定全局对象 `window`，在严格模式下，默认绑定 `undefined`
- 当函数拥有上下文对象时，隐式绑定规则会把函数调用中的`this`绑定到这个上下文对象
  > 对象属性引用链中只有上一层或者说最后一层在调用位置起作用

```js
function foo() {
  console.log(this.a);
}
var obj2 = {
  a: 42,
  foo: foo,
};
var obj1 = {
  a: 2,
  foo: foo,
};
obj1.obj2.foo(); // 42
```

> 被隐式绑定的函数会丢失绑定对象，会默认绑定，把 `this` 绑定到全局对象上

```js
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  fn();
}
var obj = {
  a: 42,
  foo: foo,
};
var a = "ruoxin test";
// 隐式绑定第一种
var bar = obj.foo;
bar(); // ruoxin test
// 隐式绑定第二种
doFoo(obj.foo); // ruoxin test
// 隐式绑定第三种
setTimeout(obj.foo, 100); // ruoxin test
```

> 箭头函数的 `this` 是根据外层作用域来决定的

```js
function foo() {
  return (a) => {
    console.log(a);
  };
}
var obj1 = {
  a: 2,
};
var obj2 = {
  a: 3,
};
var bar = foo.call(obj1);
bar.call(obj2); // 2
```

#### 优先级

1. 显式绑定比隐式绑定优先级更高
2. `new` 绑定比隐式绑定优先级高
