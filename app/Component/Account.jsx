import React from 'react';
import Header from './Header';
import {Badge, Table, NavLink, Card, Breadcrumb, BreadcrumbItem, Col, Row} from 'reactstrap';


export default class Account extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<Card body>
						<Row>
							<Col sm="6">
								<Breadcrumb color="primary">
									<BreadcrumbItem color="success">Account <Badge pill>3</Badge></BreadcrumbItem>
								</Breadcrumb>
								<Table striped bordered>
									<tbody>
										<tr>
											<td>Account 1</td>
										</tr>
										<tr>
											<td>Account 2</td>
										</tr>
										<tr>
											<td>Account 3</td>
										</tr>
									</tbody>
								</Table>
							</Col>
							<Col sm="6">
								<NavLink href="/new-account">Add Account</NavLink>
							</Col>
						</Row>
					</Card>
				</div>
			</div>
		);
	}
}
