function add(...int){ // rest operator for indefinite arguments
    let sum = 0;
    for (let i = 0; i < int.length; i++){
        sum += int[i];
    }
    return sum;
};

function multiply(...num){
    let total = 1; // 1 because anything multiplied by 0 is 0
    for (let i = 0; i < num.length; i++){
        total *= num[i];
    }
    return total;
};

module.exports = {add, multiply};