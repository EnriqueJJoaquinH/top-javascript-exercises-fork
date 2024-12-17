const repeatString = function(string, num) {
    if (num < 0)
        return "ERROR";
    let fullString = "";
    for (let i = 0; i < num; i++)
        fullString += string;
    return fullString;
};

// Do not edit below this line
module.exports = repeatString;
