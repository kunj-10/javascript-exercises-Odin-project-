const fibonacci = function(num) {
    if(isNaN(Number(num))) return "OOPS";
    if(Number(num) > 0){
        num = Number(num) - 1;
        let a = 1;
        let b = 1;
        while(num){
            let temp = a+b;
            a = b;
            b = temp;
            num--;
        }
        return a;
    }else if(Number(num) === 0) return 0;
    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
