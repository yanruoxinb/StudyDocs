
/**
 * 实现一个JSON.stringify
 * @param {*} formatData 
 * @returns 
 */
function jsonStringify(formatData) {
    let dataType = typeof formatData;
    if (dataType !== 'object') {
        let result = formatData;
        if (Number.isNaN(formatData) || formatData === Infinity) {
            result = 'null'
        } else if (dataType === 'function' || dataType === 'undefined' || dataType === "symbol") {
            return undefined
        } else if (dataType === 'string') {
            result = '"' + formatData + '"'
        }
        return String(result);

    } else {
        if (formatData === null) {
            return "null"
        } else if (formatData instanceof Array) {
            let result = [];
            formatData.forEach((item, index) => {
                if (typeof item === 'undefined' || typeof item === 'function' || typeof item === 'symbol') {
                    result[index] = "null";
                } else {
                    result[index] = jsonStringify(item);
                }
            })
            result = '[' + result.join(',') + ']'
            return result.replace(/'/g, '"')
        } else {
            let result = [];
            Object.keys(formatData).map((item, index) => {
                let type = typeof formatData[item];
                if (formatData[item] !== undefined && typeof formatData[item] !== 'function' && typeof formatData[item] !== 'symbol') {
                    result.push(`"${item}":` + jsonStringify(formatData[item]));
                }
            })
            return `{${result}}`.replace(/'/g, '"')
        }

    }
}

let sym = Symbol(10);
console.log(jsonStringify(sym), JSON.stringify(sym));
let nul = null;
console.log(jsonStringify(nul) === JSON.stringify(nul));
let und = undefined;
console.log(jsonStringify(undefined) === JSON.stringify(undefined));
let boo = false;
console.log(jsonStringify(boo) === JSON.stringify(boo));
let nan = NaN;
console.log(jsonStringify(nan) === JSON.stringify(nan));
let inf = Infinity;
console.log(jsonStringify(Infinity) === JSON.stringify(Infinity));
let str = "hello";
console.log(jsonStringify(str) === JSON.stringify(str));
let reg = new RegExp("\w");
console.log(jsonStringify(reg) === JSON.stringify(reg));
let date = new Date();
console.log(jsonStringify(date) === JSON.stringify(date));

let obj = {
    name: '刘小夕',
    age: 22,
    hobbie: ['coding', 'writing'],
    unq: Symbol(10),
    sayHello: function () {
        console.log("hello")
    },
    more: {
        brother: 'Star',
        age: 20,
        hobbie: [null],
        info: {
            money: undefined,
            job: null,
            others: []
        }
    }
}
console.log(jsonStringify(obj), '--------');
console.log(JSON.stringify(obj), '--------')


function SuperType(name, age) {
    this.name = name;
    this.age = age;
}
let per = new SuperType('小姐姐', 20);
console.log(jsonStringify(per) === JSON.stringify(per));

function SubType(info) {
    this.info = info;
}
SubType.prototype.toJSON = function () {
    return {
        name: '钱钱钱',
        mount: 'many',
        say: function () {
            console.log('我偏不说！');
        },
        more: null,
        reg: new RegExp("\w")
    }
}
let sub = new SubType('hi');
console.log(jsonStringify(sub) === JSON.stringify(sub));
let map = new Map();
map.set('name', '小姐姐');
console.log(jsonStringify(map) === JSON.stringify(map));
let set = new Set([1, 2, 3, 4, 5, 1, 2, 3]);
console.log(jsonStringify(set) === JSON.stringify(set));