import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

import './styles/index.scss';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import ProjectForm from './components/ProjectForm';
import Account from './components/Account';
import StaffingRequest from './components/StaffingRequest';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route exact path="/" component={Dashboard} />
				<Route path="/project" component={Project} />
				<Route path="/account" component={Account} />
				<Route path="/staffing_request" component={StaffingRequest} />
				<Route path="/new-project" component={ProjectForm} />
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('app'),
);
