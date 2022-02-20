
1. Object 怎么存储的？ 什么时候存储在堆中，什么时候在栈中？
2.
```js 
"" == false  //true
![] == "" //true
3+"2" == 5 //false
[5<6<3,3<2<4] //[true,true]
(2<3)||(3<2) // true
// ( && ) 的优先级高于逻辑“或”运算符( || ) 的优先级
console.log(true||false&&false, true&&false||true) //true true

[ 'a', ,'b', ,].length // 4
1 + - + + + - + 1  // 2 
[] +  {} // '[object Object]'
{} + []  // 0
[] == false // true
NaN == false // false
NaN == true // false

```

## 易错题
- this

1. 对象

```js
a = 1;
function foo() {
    console.log(this.a); 
}
const obj = {
    a: 10,
    bar() {
        foo(); // 1
    }
}
obj.bar(); 
```

2. 函数内执行

```js
var a = 1
function outer () {
  var a = 2
  function inner () { 
    console.log(this.a) // 1
  }
  inner()
}
outer()

```

3. 数值转换

```js
console.log([“0x1“, “0x2“, “0x3“].map(parseInt));
// [1,NaN,0]
console.log(['1','2','3']).map(parseInt);
// [1,NaN,NaN]
```




