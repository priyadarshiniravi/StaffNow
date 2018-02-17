import axios from 'axios';


export function renderProjects(projects) {
	return {
		type: 'RENDER_PROJECTS',
		projects,
	};
}

export function getProjects() {
	return dispatch => axios.get('http://localhost:8080/project').then((response) => {
		dispatch(renderProjects(response.data));
	});
}

