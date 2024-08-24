const fibonacci = function(end) {
    end = Number(end)
    if (end < 0 || !Number.isInteger(end)) {
        return "OOPS"
    }
    if (end === 0) {
        return 0
    }
    if (end === 1 || end === 2) {
        return 1
    }

    let a = 1, b = 1
    for (let i = 3; i <= end; i++) {
        [a, b] = [b, a + b]
    }

    return b
};

// Do not edit below this line
module.exports = fibonacci;
