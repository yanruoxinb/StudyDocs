/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let num1Str = num1.toString();
    let num2Str = num2.toString();
    let flag = 0;
    let len1 = num1Str.length - 1;
    let len2 = num2Str.length - 1;
    let res = '';
    while (len1 >= 0 && len2 >= 0) {
        let sum = Number(num1Str[len1]) + Number(num2Str[len2]) + flag;
        if (sum >= 10) {
            flag = 1;
            res = (sum - 10) + res
        } else {
            res = sum + res;
            flag = 0;
        }
        len2--;
        len1--;
    }

    while (len1 >= 0) {
        let sum = Number(num1Str[len1]) + flag;
        if (sum >= 10) {
            flag = 1;
            res = (sum - 10) + res
        } else {
            res = sum + res;
            flag = 0;
        }
        
        len1--;

    }
    while (len2 >= 0) {
        let sum = Number(num2Str[len2]) + flag;
        if (sum >= 10) {
            flag = 1;
            res = (sum - 10) + res
        } else {
            res = sum + res;
            flag = 0;
        }
        
        len2--;

    }
    return res;


};

console.log(addStrings('11', '123'))