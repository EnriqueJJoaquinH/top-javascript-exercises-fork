const fibonacci = function(position) {
    let i = +position;
    if (i < 0)
        return 'OOPS';
    if (i == 0)
        return 0;
    else if (i == 1 || i == 2)
        return 1;
    return fibonacci(i - 1) + fibonacci(i - 2)
};

// Do not edit below this line
module.exports = fibonacci;
