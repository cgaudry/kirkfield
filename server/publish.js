Inventory = new Mongo.Collection("inventory");
Jobs = new Mongo.Collection("jobs");
Vehicles = new Mongo.Collection("vehicles");

Meteor.publish("allInventory", function() {
	return Inventory.find();
})

Meteor.publish("queryInventory", function(query) {
	return Inventory.find({inventoryItemName: query});
})

Meteor.publish("allJobs", function() {
	return Jobs.find();
})

Meteor.publish("allVehicles", function() {
	return Vehicles.find();
})