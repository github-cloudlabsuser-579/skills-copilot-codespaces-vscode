// Simple Calculator in JavaScript

class Calculator {
    constructor() {
      this.value = 0;
    }
  
    add(number) {
      this.value += number;
      return this;
    }
  
    subtract(number) {
      this.value -= number;
      return this;
    }
  
    multiply(number) {
      this.value *= number;
      return this;
    }
  
    divide(number) {
      if (number === 0) {
        console.log("Cannot divide by zero.");
        return this;
      }
      this.value /= number;
      return this;
    }
  
    clear() {
      this.value = 0;
      return this;
    }
  
    printResult() {
      console.log(`Current Value: ${this.value}`);
      return this;
    }
  }
  
  // Example usage
  const calc = new Calculator();
  calc.add(5).subtract(2).multiply(3).divide(2).printResult(); // Should output: Current Value: 4.5

  const assert = require('assert').strict;
const Calculator = require('./Calculator'); // Adjust the path as necessary

describe('Calculator', function() {
  describe('#add()', function() {
    it('should start with a value of 0', function() {
      const calc = new Calculator();
      assert.equal(calc.value, 0);
    });

    it('should add a positive number correctly', function() {
      const calc = new Calculator();
      calc.add(5);
      assert.equal(calc.value, 5);
    });

    it('should add a negative number correctly', function() {
      const calc = new Calculator();
      calc.add(-3);
      assert.equal(calc.value, -3);
    });

    it('should handle adding zero correctly', function() {
      const calc = new Calculator();
      calc.add(0);
      assert.equal(calc.value, 0);
    });

    it('should handle chaining add operations correctly', function() {
      const calc = new Calculator();
      calc.add(2).add(3).add(-1);
      assert.equal(calc.value, 4);
    });
  });
});