function add(...arguments){ 
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
};

function multiply(...arguments){
    let total = 1; 
    for (let i = 0; i < arguments.length; i++){
        total *= arguments[i];
    }
    return total;
};

module.exports = {add, multiply};