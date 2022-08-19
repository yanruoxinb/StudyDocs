

function myInstance(target, origin) {
    if (typeof target !== 'object' || origin == null) {
        return false;
    }
    let proto = Object.getPrototypeOf(target);
    const originProto = origin.prototype;
    while (true) {
        if (!proto) {
            return false
        }
        if (proto === originProto) {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
}


function myPuppy() { }
const people1 = new Object();
const people2 = new myPuppy();
console.log(myInstance(people1, Object));
console.log(myInstance(people2, myPuppy));

console.log(myInstance(obj1, obj2));