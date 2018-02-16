import React from 'react';
import {Col, Row} from 'reactstrap';

import Header from './Header';
import StaffingPieChart from './staffingPieChart';

const staffed = [
	{title: 'Chennai', value: 30, color: '#22594e'},
	{title: 'Data 2', value: 20, color: '#2f7d6d'},
	{title: 'Data 3', value: 10, color: '#3da18d'},
	{title: 'Data 4', value: 9, color: '#69c2b0'},
	{title: 'Data 5', value: 30, color: '#a1d9ce'},
];

const notStaffed = [
	{title: 'Chennai', value: 30, color: '#FF0000'},
	{title: 'Data 2', value: 20, color: '#FF4c4c'},
	{title: 'Data 3', value: 10, color: '#FF6666'},
	{title: 'Data 4', value: 9, color: '#69c2b0'},
	{title: 'Data 5', value: 30, color: '#a1d9ce'},
];

export default class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<Header />
                Welcome to StaffNow
				<Row>
					<Col sm="6">
						<StaffingPieChart data={staffed} />
					</Col>
					<Col sm="6">
						<StaffingPieChart data={notStaffed} />
					</Col>
				</Row>
			</div>

		);
	}
}
