import axios from 'axios';

const root = 'http://localhost:8080';
export function renderProjects(elements) {
	return {
		type: 'RENDER_ITEMS',
		elements,
	};
}

function getAllFrom(url) {
	return dispatch => axios.get(`${root}${url}`).then((response) => {
		dispatch(renderProjects(response.data));
	}).catch((e) => {
		console.log(e);
	});
}

export function getProjects() {
	return getAllFrom('/project');
}

export function getAccounts() {
	return getAllFrom('/account');
}

export function getStaffingRequests() {
	return getAllFrom('/staffingRequest');
}

