import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import InventoryForm from './InventoryForm.jsx';
import InventorySingle from './InventorySingle.jsx';





export default class InventorySearchWrapper extends TrackerReact(React.Component) {
	constructor() {
		super();

		
		this.state = {
			
			subscription: {
				inventorySearch: Meteor.subscribe("queryInventory", "")
			}
		}
	}

	//uncomment to empty the queried item subscriptions
	componentWillUnmount() {
		//this.state.subscription.inventorySearch.stop();
	}


	updateState(event) {
		event.preventDefault();
		this.setState({
			
			subscription: {
				inventorySearch: Meteor.subscribe("queryInventory", this.refs.query.value.trim())
				}
			})
		this.updateSesh(event);
	}

	updateSesh(event) {
		event.preventDefault();
		Session.set('query', this.refs.query.value.trim());
		this.forceUpdate();
	}


	inventoryItems() {
		
		return Inventory.find({inventoryItemName: Session.get('query')}).fetch();
	}
	

	render() {
		
		return(
			<div>
				<h1>Search Inventory Items</h1>
				<form 
				className="new-resolution" 
				onSubmit={this.updateState.bind(this)}>
					<input 
						type="text" 
						ref="query"
						placeholder="Search Term"
					/>
					<input type="submit" />
				</form>
				<ul className="resolutions">
				{this.inventoryItems().map( (inventoryItems) => {
					return <InventorySingle key={inventoryItems._id} inventoryItem={inventoryItems} />
				})}
			</ul>
				
			</div>

		)
	}
}
