Meteor.methods({

	toggleResolution(resolution) {
		if(Meteor.userId() !== resolution.user) {
			throw new Meteor.Error('Not authorized')
		}
		Resolutions.update(resolution._id, {
			$set: {complete: !resolution.complete}
		})
	},



	addInventoryItem(inventoryItemId, inventoryItemName, inventoryItemQuantity) {
		if(!Meteor.userId()) {
			throw new Meteor.Error('Not authorized')
		}

		entry = Inventory.findOne({inventoryItemId: inventoryItemId})
		//update quantity if item exists, add new listing if not
		if(entry) {
			newQuantity = parseInt(entry.inventoryItemQuantity) + parseInt(inventoryItemQuantity)
			Inventory.update(
				{_id: entry._id},
				{$set: {inventoryItemQuantity: newQuantity}}
				)
		} else {
			Inventory.insert({
				inventoryItemId: inventoryItemId,
				inventoryItemName: inventoryItemName,
				inventoryItemQuantity: parseInt(inventoryItemQuantity),
				complete: false,
				createdAt: new Date(),
				user: Meteor.userId()
			})
		}
	},

	deleteInventoryItem(inventoryItem) {
		//can only delete items user inserted
		//might have to change
		if(Meteor.userId() !== inventoryItem.user) {
			throw new Meteor.Error('Not authorized')
		}
		Inventory.remove(inventoryItem._id)
	},
});