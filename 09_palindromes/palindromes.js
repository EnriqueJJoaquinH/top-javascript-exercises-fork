const palindromes = function (string) {
    let stringArr = string.split('')
                          .filter((char) => /[a-z0-9]/i.test(char))
                          .map((char) => char.toLowerCase());
    let reverseArr = [...stringArr].reverse();
    return stringArr.every((element, index) => element === reverseArr[index]);
};

// Do not edit below this line
module.exports = palindromes;
