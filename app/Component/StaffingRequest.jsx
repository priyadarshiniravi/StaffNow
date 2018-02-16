import React from 'react';
import Header from './Header';
import {Badge, Table, NavLink, Card, Breadcrumb, BreadcrumbItem, Col, Row} from 'reactstrap';


export default class StaffingRequest extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<Card body>
						<Row>
							<Col sm="6">
								<Breadcrumb color="primary">
									<BreadcrumbItem color="success">Projects <Badge pill>4</Badge></BreadcrumbItem>
								</Breadcrumb>
								<Table striped bordered>
									<tbody>
										<tr>
											<td>StaffingRequest 1</td>
										</tr>
										<tr>
											<td>StaffingRequest 2</td>
										</tr>
										<tr>
											<td>StaffingRequest 3</td>
										</tr>
										<tr>
											<td>StaffingRequest 4</td>
										</tr>
									</tbody>
								</Table>
							</Col>
							<Col sm="6">
								<NavLink href="/new-project">Add StaffingRequest</NavLink>
							</Col>
						</Row>
					</Card>
				</div>
			</div>
		);
	}
}
