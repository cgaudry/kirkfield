import React, {Component} from 'react';

export default class JobForm extends Component {

	addJob(event) {
		event.preventDefault();
		let jobId = this.refs.jobId.value.trim();
		let jobName = this.refs.jobName.value.trim();
		let jobQuantity = this.refs.jobQuantity.value.trim();
		
		//add further input validation rules here
		if(jobId) {
			Meteor.call('addJob', jobId, jobName, jobQuantity, (error, data) => {
			if(error) {
				Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
			} else {
			this.refs.jobId.value = "";
			this.refs.jobName.value = "";
			this.refs.jobQuantity.value = "";
			}
		});
		}

		
	}
	
	render() {
		return(
			<form className="new-resolution" onSubmit={this.addJob.bind(this)}>
					<input 
						id="itemId"
						type="text" 
						ref="jobId"
						placeholder="Job Id"
					/>
					<input 
						id="itemName"
						type="text" 
						ref="jobName"
						placeholder="Job Name"
					/>
					<input 
						id="itemQuantity"
						type="number" 
						ref="jobQuantity"
						placeholder="Job Item Quantity"
					/>
					<input type="submit" />
				</form>
			)
	}
}
