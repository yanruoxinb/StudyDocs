/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function (s1, s2) {
    let str1Map = new Map();
    for (let i = 0; i < s1.length; i++) {
        str1Map.set(s1[i], (str1Map.get(s1[i]) || 0) + 1);
    }
    let res = "";
    for (let i = 0; i < s2.length; i++) {
        if (res.length === s1.length) return true;
        if (str1Map.has(s2[i]) && str1Map.get(s2[i]) > 0) {
            res += s2[i];
            str1Map.set(s2[i], str1Map.get(s2[i]) - 1);
        }
        else if (str1Map.has(s2[i]) && str1Map.get(s2[i]) === 0) {
            console.log(res);
            let str = res.slice(0, res.indexOf(s2[i]));
            res = res.slice(res.indexOf(s2[i]) + 1) + s2[i];
            for (let j = 0; j < str.length; j++) {
                str1Map.set(str[j], str1Map.get(str[j]) + 1);
            }
        }
        else if (!str1Map.has(s2[i])) {
            for (let j = 0; j < res.length; j++) {
                str1Map.set(res[j], str1Map.get(res[j]) + 1);
            }
            res = "";
        }

    }
    if (res.length === s1.length) return true;
    return false;
};

console.log(checkInclusion('rokx', 'otrxvfszxroxrzdsltg'));