/**
 * 函数柯里化
 * @param {*} fn 
 * @param {*} length 
 * @returns 
 */
const curry = (fn,length)=>{
    length = length||fn.length;
    return function(...args){
        if(args.length < length){
            return curry(fn.bind(this,...args),length - args.length)
        }else{
            return fn.call(this,...args)
        }

    }
}

const add1 = (a,b)=>{
    return a+b
}

console.log(curry(add1,4)(1)(2)(4)(3));

const curry2 = (fn) =>{
  return (judge = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...args2) => judge(...args, ...args2));
}


const add = (...args1)=>{
    let args = [...args1]
    const fn = (...args2)=>{
        args = [...args,...args2]
        return fn;
    }
    fn.toString = function(){
        return args.reduce((prev,item)=>prev+item,0)
    }
    return fn;
}

console.log(add(1)(2)(3).toString());
console.log(add(3)(4,5)==12)