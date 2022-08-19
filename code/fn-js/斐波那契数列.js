
/**
 * 斐波那契数列
 * F(0) = 0; F(1) = 1;
 * f(n)= f(n-1)+ f(n-2)
 */
function fib(n) {
    if (n === 0 || n === 1) {
        return 0
    }
    let sum = [0, 1];
    for (let i = 2; i < n; i++){
        let add = sum[sum.length - 1] + sum[sum.length-2];
        sum.push(add);
    }
    console.log(sum);
    return sum[n - 1];
}

// console.log(fib(8))

function fib2(n) {
    if (n === 0 || n === 1) {
        return n
    }
    let sum_n1 = 1;
    let sum_n2 = 0;
    let sum = 1;
    for (let i = 2; i < n; i++){
        sum = sum_n1 + sum_n2;
        sum_n2 = sum_n1;
        sum_n1 = sum;
    }
    return sum;
}
console.log(fib2(4))