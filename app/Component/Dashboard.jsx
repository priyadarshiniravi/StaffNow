import React from 'react';
import {Col, Row} from 'reactstrap';

import Header from './Header';
import StaffingPieChart from './StaffingPieChart';

const staffed = [
	{title: 'Chennai', value: 30, color: '#22594e'},
	{title: 'Banglore', value: 20, color: '#2f7d6d'},
	{title: 'Mumbai', value: 10, color: '#3da18d'},
	{title: 'Kolkata', value: 9, color: '#69c2b0'},
	{title: 'Hydrabad', value: 30, color: '#a1d9ce'},
];

const notStaffed = [
	{title: 'Chennai', value: 30, color: '#FF0000'},
	{title: 'Banglore', value: 20, color: '#FF4c4c'},
	{title: 'Mumbai', value: 10, color: '#FF6666'},
	{title: 'Kolkata', value: 9, color: '#69c2b0'},
	{title: 'Bombay', value: 30, color: '#a1d9ce'},
];

export default class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div align="center">Welcome to StaffNow</div>
				<Row>
					<Col sm="6">
						<StaffingPieChart data={staffed} />
						<div align="center">Staffed</div>
					</Col>
					<Col sm="6">
						<StaffingPieChart data={notStaffed} />
						<div align="center">Not Staffed</div>
					</Col>
				</Row>
			</div>

		);
	}
}
