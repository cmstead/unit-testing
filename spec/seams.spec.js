var Controller = require('../seams.js').Controller,
	Service = require('../seams.js').Service;

describe('Working with seams', function () {
	
	var controller;
	
	beforeEach(function () {
		var service = {
			get: function (id, callback) {
				callback('foo');
			}
		};
		controller = new Controller({});
	});
	
	describe('getData', function () {

		beforeEach(function () {
			controller.resolve = function () {};
		});
		
		// it('should call resolve function', function () {
		// 	controller.resolve = jasmine.createSpy('resolve');
		// 	controller.getData(12);
		// 	expect(controller.resolve).toHaveBeenCalled();
		// });
		
		it('should call requestService.get', function () {
			var spy = jasmine.spy('get');
			controller.resolve = function () {
				spy();
			}
			controller.getData(12);
			expect(spy).toHaveBeenCalled();
		});
		
	});
	
});