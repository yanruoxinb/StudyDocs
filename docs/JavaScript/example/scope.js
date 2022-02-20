var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();


// 函数声明会被加入到变量对象中，函数表达式则不会

// 函数声明
function a(){}
console.log(typeof a); // "function"

// 函数表达式
var a = function _a(){};
console.log(typeof a); // "function"
console.log(typeof _a); // "undefined"