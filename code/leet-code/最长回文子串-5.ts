
function longestStr(str: string) {

    let begin = 0;
    let maxLen = 1;
    if(str.length<2){
        return str;
    }

    for (let i = 0; i < str.length - 1; i++) {
        // 偶数
        let evenLen = expandAroundCenter(str, i, i + 1);
        // 奇数
        let oddLen = expandAroundCenter(str, i, i);
        const newLen = Math.max(evenLen, oddLen);
        if (newLen > maxLen) {
            maxLen = newLen;
            begin = i - Math.floor((maxLen - 1) / 2);
        }
    }
    console.log('---maxLen--',begin,maxLen)

    return str.substring(begin, begin + maxLen);
}

const expandAroundCenter = (str:string, i:number, j:number) => {
    let left = i;
    let right = j;
    const len = str.length;
    while (left >= 0 && right < len) {
        if (str[left] === str[right]) {
            left--;
            right++;
        } else {
            break;
        }
    }

    return right - left - 1;
}

console.log(longestStr('ab'))
console.log(longestStr('aba'))
console.log(longestStr('bb'))
console.log(longestStr('abacdeed'))
console.log(longestStr('abdefedac'));