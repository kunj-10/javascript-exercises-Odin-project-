const palindromes = function (str) {
    str = str.toLowerCase().split('').filter(val => /[a-zA-Z0-9]/.test(val)).join('');
    return str === str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
