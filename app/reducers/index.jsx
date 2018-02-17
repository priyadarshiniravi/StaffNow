const defaultState = {
	projects: [{name: 'hello'}],
};

const projectReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'RENDER_PROJECTS':
		return Object.assign({}, state, {
			projects: action.projects,
		});
	default:
		return state;
	}
};

export default projectReducer;

