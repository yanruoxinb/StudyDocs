

const getCount = ()=>{
    let dp = new Array(9)
     dp[9] =1;
     for(let i=8;i>=0;i--){
        dp[i] = (dp[i+1]+1)*2
     }
     console.log(dp)
     return  dp[0];
}

console.log(getCount())