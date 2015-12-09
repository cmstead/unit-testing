function Controller (requestService) {
	this.requestService = requestService;
}

Controller.prototype = {
	getData: function (id) {
		this.requestService.get(id, this.resolve.bind(this));
		//this.resolve();
	}
};

function Foo () {}

Foo.prototype = {
	doStuff: function () {
		return 'stuff';
	}
};

function Service (foo) {
	this.foo = foo;
}

Service.prototype = {
	
};

module.exports = {
	Controller: Controller,
	Service: new Service(new Foo())
};