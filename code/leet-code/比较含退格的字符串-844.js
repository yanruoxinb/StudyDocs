var backspaceCompare = function (S, T) {
    let i1 = S.length - 1;
    let i2 = T.length - 1;
    while (i1 >= 0 || i2 >= 0) {
        // 跳过#字符
        if (S[i1] == '#') {
            let num = 1;
            while (i1 >= 0 && S[--i1] == '#') num++;
            // 删除过程中，如果遇到#
            console.log(i1,num);
            while (num != 0) {
                i1--;
                if (S[i1] == '#') num++;
                else num--;
            }
        }
        if (T[i2] == '#') {
            let num = 1;
            while (i2 >= 0 && T[--i2] == '#') num++;
            while (num != 0) {
                i2--;
                if (T[i2] == '#') num++;
                else num--;
            }
        }
        // 实现比较
        if (S[i1] == '#' || T[i2] == '#') continue;
        else {
            if (S[i1] != T[i2]) return false;
            i1--;
            i2--;
        }
    }
    if (i1 < 0 && i2 < 0) return true;
    else return false;
};
console.log(backspaceCompare('abc#c##c', 'abc#c#c#c'))