import React from 'react';
import Header from './Header';
import {NavLink, Card, CardTitle, CardText, Col, Row} from 'reactstrap';


export default class Project extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<Card body>
						<Row>
							<Col sm="6">
								<CardTitle> 6 Projects </CardTitle>
								<CardText> Project 1 </CardText>
								<CardText> Project 2 </CardText>
								<CardText> Project 3 </CardText>
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
