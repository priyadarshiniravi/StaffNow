import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import './styles/index.scss';
import Dashboard from './Component/Dashboard';
import Project from './Component/Project';
import ProjectForm from './Component/ProjectForm';


ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Dashboard} />
			<Route path="/project" component={Project} />
			<Route path="/new-project" component={ProjectForm} />
		</div>
	</BrowserRouter>,
	document.getElementById('app'),
);
