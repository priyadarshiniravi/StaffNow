import React from 'react';
import {Card, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Header from './Header';

export default class ProjectForm extends React.Component {
	render() {
		return (<div>
			<Header />
			<Card body>
				<Form>
					<FormGroup>
						<Label for="name">Name</Label>
						<Input type="input" name="name" id="name" placeholder="Name" />
					</FormGroup>
					<Button color="primary">Submit</Button>
				</Form>
			</Card>
		</div>);
	}
}
