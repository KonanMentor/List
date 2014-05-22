describe("items", function ()
{
	beforeEach(module('items'));
	it("should add an item", inject(['items', function (Items)
	{
		Items.add(42);
		expect(Items.list[Items.list.length - 1]).toBe(42);
	}]));
});