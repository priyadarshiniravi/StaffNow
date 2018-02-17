import React from 'react';
import PieChart from 'react-svg-piechart';

export default class StaffingPieChart extends React.Component {
	render() {
		return (
			<PieChart data={this.props.data} expandOnHover />
		);
	}
}
