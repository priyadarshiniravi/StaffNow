const defaultState = {
	elements: [{name: 'hello'}],
};

const projectReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'RENDER_ITEMS':
		return Object.assign({}, state, {
			elements: action.elements,
		});
	default:
		return state;
	}
};

export default projectReducer;

