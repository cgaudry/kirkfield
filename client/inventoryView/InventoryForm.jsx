import React, {Component} from 'react';

export default class InventoryForm extends Component {

	addInventoryItem(event) {
		event.preventDefault();
		let inventoryItemId = this.refs.inventoryItemId.value.trim();
		let inventoryItemName = this.refs.inventoryItemName.value.trim();
		let inventoryItemQuantity = this.refs.inventoryItemQuantity.value.trim();
		
		//add further input validation rules here
		if(inventoryItemId) {
			Meteor.call('addInventoryItem', inventoryItemId, inventoryItemName, inventoryItemQuantity, (error, data) => {
			if(error) {
				Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
			} else {
			this.refs.inventoryItemId.value = "";
			this.refs.inventoryItemName.value = "";
			this.refs.inventoryItemQuantity.value = "";
			}
		});
		}

		
	}
	
	render() {
		return(
			<form className="new-resolution" onSubmit={this.addInventoryItem.bind(this)}>
					<input 
						id="itemId"
						type="text" 
						ref="inventoryItemId"
						placeholder="Item Id"
					/>
					<input 
						id="itemName"
						type="text" 
						ref="inventoryItemName"
						placeholder="Item Name"
					/>
					<input 
						id="itemQuantity"
						type="number" 
						ref="inventoryItemQuantity"
						placeholder="Item Quantity"
					/>
					<input type="submit" />
				</form>
			)
	}
}
