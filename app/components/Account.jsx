import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {Badge, Table, NavLink, Card, Breadcrumb, BreadcrumbItem, Col, Row} from 'reactstrap';
import * as actionCreators from '../actions/index';


export class Account extends React.Component {
	componentDidMount() {
		this.props.getAccounts();
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
									<BreadcrumbItem color="success"> Account
									<Badge pill>{this.props.elements.length}
									</Badge>
									</BreadcrumbItem>
								</Breadcrumb>
								<Table striped bordered>
									<tbody>
										{this.props.elements.map(listValue => <tr><td>{listValue.name}</td></tr>)}
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

const mapStateToProps = state => state;

export default connect(mapStateToProps, actionCreators)(Account);

