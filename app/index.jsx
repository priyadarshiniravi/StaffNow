import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import store from './redux/store';
import './styles/index.scss';
import Dashboard from './Dashboard/Dashboard';

ReactDOM.render(
	<Provider store={store}>
		<Dashboard />
	</Provider>,
	document.getElementById('app'),
);
