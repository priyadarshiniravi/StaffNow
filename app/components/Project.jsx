import React from 'react';
import Header from './Header';
import {Button, Badge, Table, NavLink, Card, Breadcrumb, BreadcrumbItem, Col, Row} from 'reactstrap';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';


export class Project extends React.Component {
	componentDidMount() {
		this.props.getProjects();
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
									<BreadcrumbItem color="success">Projects
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
								<NavLink href="/new-project">Add Project</NavLink>
							</Col>
						</Row>
					</Card>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, actionCreators)(Project);
