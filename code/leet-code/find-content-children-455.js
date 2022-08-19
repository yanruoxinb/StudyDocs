/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function (g, s) {

    g.sort((a, b) => { return a - b });
    s.sort((a, b) => { return a - b });
    let count = 0;
    for (let i = 0, j = 0; i < g.length, j < s.length; i++, j++) {
        while (g[i] > s[j] && i < g.length && j < s.length) {
            j++;
        }
        if (s[j] >= g[i]) {
            count++;
        }

    }
    return count;

 };

console.log(findContentChildren([1, 2, 3], [1, 1]));