Inventory = new Mongo.Collection("inventory");



Meteor.publish("allInventory", function() {
	return Inventory.find();
})

Meteor.publish("queryInventory", function(query) {
	return Inventory.find({inventoryItemName: query});
})