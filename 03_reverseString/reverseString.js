const reverseString = function(str) {
    // let ans = "";
    // for(let i=str.length-1; i>=0; i--){
    //     ans += str[i];
    // }
    // return ans;

    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
