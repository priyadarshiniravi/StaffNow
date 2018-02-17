import axios from 'axios';

const root = 'http://localhost:8080';
export function renderProjects(elements) {
	return {
		type: 'RENDER_ITEMS',
		elements,
	};
}

export function getProjects() {
	return dispatch => axios.get(`${root}/project`).then((response) => {
		dispatch(renderProjects(response.data));
	}).catch((e) => {
		console.log(e);
	});
}

export function getAccounts() {
	return dispatch => axios.get(`${root}/account`).then((response) => {
		dispatch(renderProjects(response.data));
	}).catch((e) => {
		console.log(e);
	});
}

export function getStaffingRequests() {
	return dispatch => axios.get(`${root}//staffingRequest`).then((response) => {
		dispatch(renderProjects(response.data));
	}).catch((e) => {
		console.log(e);
	});
}

