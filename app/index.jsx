import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import store from './redux/store';
import './styles/index.scss';
import Dashboard from './Component/Dashboard';
import Project from './Component/Project';
import {BrowserRouter, Route} from 'react-router-dom';


ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Dashboard} />
			<Route path="/project" component={Project} />
		</div>
	</BrowserRouter>,
	document.getElementById('app'),
);
