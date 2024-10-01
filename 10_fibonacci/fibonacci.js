const fibonacci = function (num) {
    num = Number(num);
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    if (num <= 2) return 1;

    let fib = [1, 1];

    for (let i = 2; i <= num; i++) {
        const nextNum = fib[i - 1] + fib[i - 2];
        fib.push(nextNum);
    }

    return fib[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
