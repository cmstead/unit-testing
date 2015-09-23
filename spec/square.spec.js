var square = require('../src/square')
	computeTotal = require('../src/computeTotal');

describe('Square a number', function(){
	
	it('should square 0', function(){
		expect(square(0)).toBe(0);
	});
	
	it('should square 1', function(){
		expect(square(1)).toBe(1);
	});
	
	it('should square any number', function(){
		expect(square(2)).toBe(4);
	});
	
});

describe('Compute a total', function(){
	
	it('should return 0 if price is 0', function(){
		expect(computeTotal(1, 0)).toBe(0);
	});
	
	it('should return price if quantity is 1', function(){
		expect(computeTotal(1, 50)).toBe(50);
	});
	
	it('should return correct total when price and quantity are non-trivial', function(){
		expect(computeTotal(3, 5)).toBe(15);
	});
	
});