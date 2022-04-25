/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    let sum = 0;
    for(let i=0 ;i<s.length;i++){
        for (let j = i; j < s.length; j++){
            let substr = s.slice(i, j + 1)
            let flag = isHuiwen(substr);
            console.log(substr,flag,i,j)
            if(flag){
                sum++;
            }
        }
    }
    return sum;
    
};

var isHuiwen = (s) => {
    let len = s.length-1;
    let i= 0 ,j = len;
    while(i<=j){
        if(s[i]===s[j]){
            i++;
            j--;
        }else{
           return false
        }
    }
    return true;
    
}

console.log(countSubstrings('aaa'))