const sumAll = function(sumStart, sumEnd) {
    let sum = 0;

    const largerNumFirst = sumStart > sumEnd;
    const negativeParams = sumStart < 0 || sumEnd < 0;
    const nonIntegerParams = !Number.isInteger(sumStart) || !Number.isInteger(sumEnd);

    if (largerNumFirst){
        let temp = sumStart;
        sumStart = sumEnd;
        sumEnd = temp;
    }
    if (negativeParams || nonIntegerParams) {
        return 'ERROR';
    }

    for (let i = sumStart; i <= sumEnd; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
