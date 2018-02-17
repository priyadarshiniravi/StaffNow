import React from 'react';
import Header from './Header';
import {Badge, Table, NavLink, Card, Breadcrumb, BreadcrumbItem, Col, Row} from 'reactstrap';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';


export class StaffingRequest extends React.Component {
	componentDidMount() {
		this.props.getStaffingRequests();
	}
	render() {
		return (
			<div>
				<Header />
				<div>
					<Card body>
						<Row>
							<Col sm="6">
								<Breadcrumb color="primary">
									<BreadcrumbItem color="success"> Staffing Request
									<Badge pill>{this.props.elements.length}
									</Badge>
									</BreadcrumbItem>
								</Breadcrumb>
								<Table striped bordered>
									<tbody>
										{this.props.elements.map(listValue => (
											<tr>
												<td>{listValue.role}</td>
												<td>{listValue.grade}</td>
												<td>{listValue.location}</td>
											</tr>))}
									</tbody>
								</Table>
							</Col>
							<Col sm="6">
								<NavLink href="/new-staff-request">Add StaffingRequest</NavLink>
							</Col>
						</Row>
					</Card>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, actionCreators)(StaffingRequest);

