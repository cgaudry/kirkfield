import React, {Component} from 'react';

export default class JobSingle extends Component {

	toggleChecked() {
		Meteor.call('toggleResolution', this.props.jobItem);
	}

	deleteJobItem() {
		Meteor.call('deleteJobItem', this.props.jobItem);
	}

	render() {
		const resolutionClass = this.props.jobItem.complete ? "checked" : "";
		const status = this.props.jobItem.complete ? <span className="completed">Completed</span> : '';

		return (
			<li className={resolutionClass}>
			<input type="checkbox"
				readOnly={true}
				checked={this.props.jobItem.complete}
				onClick={this.toggleChecked.bind(this)} />

				<a href={`/job/${this.props.jobItem._id}`}>
					ItemName - {this.props.jobItem.jobName} Quantity -  {this.props.jobItem.jobQuantity}
				</a>

				{status}
				<button className="btn-cancel"
					onClick={this.deleteJobItem.bind(this)}>
					&times; 
				</button>
			</li>
		)
	}
}