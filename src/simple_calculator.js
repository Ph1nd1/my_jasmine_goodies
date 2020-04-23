function add(...int){ // rest operator for indefinite arguments
    let sum = int.reduce((a, b) => a + b);
    return sum;
};

function multiply(...num){
    let total = num.reduce((x, y) => x * y);
    return total;
};

module.exports = {add, multiply};