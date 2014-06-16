describe("items", function () {
	var Items, $httpBackend;

	beforeEach(function () {
		module('items');

		inject(function (_Items_, _$httpBackend_) {
			Items = _Items_;
			$httpBackend = _$httpBackend_;
		});
	});

	describe("add", function () {
		it("should call success", function () {
			var success = jasmine.createSpy(), error = jasmine.createSpy();
			$httpBackend.expectPOST("http://localhost:8888/items").respond(200);
			Items.add("sometext", success, error);
			$httpBackend.flush();
			expect(success).toHaveBeenCalled();
			expect(error).not.toHaveBeenCalled();
		});

		it("should call error", function () {
			var success = jasmine.createSpy(), error = jasmine.createSpy();
			$httpBackend.expectPOST("http://localhost:8888/items").respond(500);
			Items.add("sometext", success, error);
			$httpBackend.flush();
			expect(success).not.toHaveBeenCalled();
			expect(error).toHaveBeenCalled();
		});
	});

	describe("remove", function () {
		it("should call success", function () {
			var success = jasmine.createSpy(), error = jasmine.createSpy();
			$httpBackend.expectDELETE("http://localhost:8888/items/42").respond(200);
			Items.remove(42, success, error);
			$httpBackend.flush();
			expect(success).toHaveBeenCalled();
			expect(error).not.toHaveBeenCalled();
		});

		it("should call error", function () {
			var success = jasmine.createSpy(), error = jasmine.createSpy();
			$httpBackend.expectDELETE("http://localhost:8888/items/42").respond(500);
			Items.remove(42, success, error);
			$httpBackend.flush();
			expect(success).not.toHaveBeenCalled();
			expect(error).toHaveBeenCalled();
		});
	});
});