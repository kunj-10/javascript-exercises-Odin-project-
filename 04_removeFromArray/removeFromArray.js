const removeFromArray = function() {
    let arr = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let itemToRemove = arguments[i];
        let index;
        while ((index = arr.indexOf(itemToRemove)) !== -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
