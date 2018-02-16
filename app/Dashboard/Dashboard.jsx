import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/">StaffNow</NavbarBrand>
					<NavbarToggler onClick={this.toggle}/>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href=""> Projects </NavLink>
							</NavItem>
							<NavItem>
								<NavLink href=""> Accounts </NavLink>
							</NavItem>
							<NavItem>
								<NavLink href=""> Staffing Request </NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="">Hello User!</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<div className="container">
				</div>
			</div>
		);
	}
}