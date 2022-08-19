
function get(obj, path) {
    let pathArr = Array.isArray(path) ? path.join('.')?.replace(/\[/, '')?.replace(/\]/, '').split('.'):
        path.replace(/\[/, '.')?.replace(/\]/, '').split('.');
    console.log(pathArr)
    let result = obj;
    for (let i = 0; i < pathArr.length; i++){
        if (result && result[pathArr[i]]) {
            result = result[pathArr[i]];

        } else {
            return undefined;
        }
    }
    return result;
}
console.log(get({
    a: {
        c:[1,{key:2}]
    }
}, 'a.c[1].key'))

console.log(get({
    a: {
        c:[1,{key:2}]
    },
    b:[1,2,3]
}, ['b[2]']))

function _get(obj, path) {
    return path
        .map(item => {
            item.replace(/\[/g, '.').replace(/\]/g, '').split('.')
                .map(paths => {
                    console.log(obj[paths], paths, '-------')
                    return obj = obj && obj[paths];
                })
            return obj;
    })
    
}
console.log(_get({
    a: {
        c:[1,{key:2}]
    }
}, ['a.c[1].key']))

// console.log(_get({
//     a: {
//         c:[1,{key:2}]
//     },
//     b:[1,2,3]
// }, ['b[2]']
// ))
