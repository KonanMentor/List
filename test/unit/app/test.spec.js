describe("items", function ()
{
	beforeEach(module('items'));
	it("should add an item", inject(['Items', function (Items)
	{
		Items.add(42);
		expect(Items.list[Items.list.length - 1]).toBe(42);
	}]));

	it("should remove an item", inject(['Items', function (Items)
	{
		var items = Items.list.length;
		Items.add(42);
		Items.remove(Items.list.length - 1);
		expect(Items.list.length).toBe(items);
	}]));
});