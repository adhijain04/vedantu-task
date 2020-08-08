// initialising the reducer state
const initialState = {
	reposData: {
		error: null,
		isFetching: false,
		Data: null,
	},
};

export const RepositoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_REPOS_PENDING':
			return {
				...state,
				assignment: {
					...state.assignment,
					isFetching: true,
				},
			};

		case 'GET_REPOS_SUCCESS':
			return {
				...state,
				assignment: {
					...state.assignment,
					isFetching: false,
					Data: action.value,
				},
			};

		case 'GET_REPOS_FAILED':
			return {
				...state,
				assignment: {
					...state.assignment,
					isFetching: false,
					error: action.value,
				},
			};

		default:
			return state;
	}
};

export default RepositoryReducer;
