const fibonacci = function(end) {
    let fib = [1, 1]
    if (end < 0) {
        return "OOPS"
    }
    if (end == 0) {
        return 0
    }
    if (end == 1 || end == 2) {
        return 1
    }
    for (let i = 2; i < end; i++) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2])
    }
    return fib[fib.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
