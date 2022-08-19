



/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let flag = 0;
    let sumRes = [];
    let num2Len = num2.length - 1;
    let num1Len = num1.length - 1;
    let j = 0;
    while (num1Len >= 0) {
        let res = new Array((num1.length - 1) - num1Len).fill(0).join('');
        j = num2Len;
        while (j >= 0 || flag != 0) {
            let multiplyData = num1[num1Len] * (num2[j] || 0) + flag;
            flag = Math.floor(multiplyData / 10);
            res = (multiplyData % 10) + res;
            j--;
        }
        sumRes.push(res);
        num1Len--;
    }

    return sumRes.reduce((prev, cur) => {
        return prev + Number(cur);
    },0)
};

console.log(multiply('123', '456'));