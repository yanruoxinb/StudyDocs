
/**
 * 写一个 mySetInterVal(fn, a, b),
 * 每次间隔 a,a+b,a+2b,...,a+nb 的时间
 * 然后写一个 myClear，停止上面的 mySetInterVal
 * @param {*} fn 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */

function mySetInterVal(fn, a, b) {
    let timeCount = 0;
    let timer;
    const loop = () => {
        timer = setTimeout(() => {
            fn();
            timeCount++;
            loop();

        }, a + timeCount * b)
    }
    loop();
    return () => {
        clearTimeout(timer);
    }
}


const timer = mySetInterVal(() => { console.log('----run--------') }, 100, 50);
setTimeout(() => timer(), 1000)
