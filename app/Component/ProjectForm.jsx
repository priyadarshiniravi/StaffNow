import React from 'react';
import DatePicker from 'react-datepicker';
import {Card, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import Header from './Header';


export default class ProjectForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: moment(),
		};
		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
	}

	handleStartDateChange(date) {
		this.setState({
			startDate: date,
		});
	}

	handleEndDateChange(date) {
		this.setState({
			startDate: date,
		});
	}

	render() {
		return (<div>
			<Header />
			<Card body>
				<Form>
					<FormGroup>
						<Label for="name">Name</Label>
						<Input type="input" name="name" id="name" placeholder="Name" />
					</FormGroup>
					<FormGroup>
						<Label for="name">Start Date</Label>
						<DatePicker selected={this.state.startDate} onChange={this.handleStartDateChange} />
					</FormGroup>
					<FormGroup>
						<Label for="name">End Date</Label>
						<DatePicker selected={this.state.startDate} onChange={this.handleStartDateChange} />
					</FormGroup>
					<FormGroup>
						<Label for="probablity">Probability</Label>
						<Input type="input" name="probability" id="probability" placeholder="probability" />
					</FormGroup>
					<Button color="primary">Submit</Button>
				</Form>
			</Card></div>
		);
	}
}
