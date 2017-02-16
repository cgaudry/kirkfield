import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';






export default class ReportWrapper extends TrackerReact(React.Component) {
	constructor() {
		super();

		this.state = {value: ''};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	componentWillUnmount() {
		
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('oi ' + this.state.value);
		event.preventDefault();
	}

	jobItems() {
		
	}

	

	render() {
		
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Chose report:
						<select value={this.state.value} onChange={this.handleChange}>
							<option value="report1">Report 1</option>
							<option value="report2">Report 2</option>
							<option value="report3">Report 3</option>
						</select>
					</label>	
					<input type="submit" value="submit"/>
				</form>
			</div>

		)
	}
}

