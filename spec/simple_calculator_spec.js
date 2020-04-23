const {add, multiply} = require("../src/simple_calculator");

describe("adding numbers", function(){
    it('should add two numbers', function(){
        expect(add(-1, -2)).toBe(-3);
    })

    it('should add alot of numbers', function(){
        expect(add(1, 2, 3, 4)).toBe(10);
    })
});

describe("multiply numbers", function(){
    it('should multiply two numbers', function(){
        expect(multiply(1, -3)).toBe(-3);
    })
    it('should multiply alot of numbers', function(){
        expect(multiply(1, 2, 3, 4,5)).toBe(120);
    })
});