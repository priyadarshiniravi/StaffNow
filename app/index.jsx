import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import './styles/index.scss';
import Dashboard from './Component/Dashboard';
import Project from './Component/Project';
import ProjectForm from './Component/ProjectForm';
import Account from './Component/Account';
import StaffingRequest from './Component/StaffingRequest';


ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Dashboard} />
			<Route path="/project" component={Project} />
			<Route path="/account" component={Account} />
			<Route path="/staffing_request" component={StaffingRequest} />
			<Route path="/new-project" component={ProjectForm} />
		</div>
	</BrowserRouter>,
	document.getElementById('app'),
);
