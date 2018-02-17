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
					{this.props.projects.map(listValue => <li>{listValue.name}</li>)}
				</div>
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
											<td>Project 1</td>
										</tr>
										<tr>
											<td>Project 2</td>
										</tr>
										<tr>
											<td>Project 3</td>
										</tr>
										<tr>
											<td>Project 4</td>
										</tr>
									</tbody>
								</Table>
							</Col>
							<Col sm="6">
								<NavLink href="/new-project">Add Project</NavLink>
							</Col>
						</Row>
					</Card>
				</div>
				<Button handleClick={this.props.getProjects} />
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, actionCreators)(Project);
