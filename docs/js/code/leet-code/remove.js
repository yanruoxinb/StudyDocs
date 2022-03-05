var removeOuterParentheses = function (s) {
    let res = '', count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" && count++ > 0) {
            res += s[i];
        }
        if (s[i] === ')' && count-- > 1) {
            console.log(res + 'eeeeeeeee');
            res += s[i];
        }


    }
    return res;
};

removeOuterParentheses("(()())(())")

