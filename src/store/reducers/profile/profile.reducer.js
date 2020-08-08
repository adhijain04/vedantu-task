// initialising the reducer state.
const initialState = {
	profileData: {
		data: null,
		error: null,
		isFetching: false,
	},
};

export const ProfileReducer = (state = initialState, action) => {

	switch (action.type) {
		case 'GET_PROFILE_PENDING':
			return {
				...state,
				profileData: {
					...state.profileData,
					isFetching: true,
				},
			};

		case 'GET_PROFILE_SUCCESS':
			return {
				...state,
				profileData: {
					...state.profileData,
					isFetching: false,
					data: action.value,
				},
			};

		case 'GET_PROFILE_FAILED':
			return {
				...state,
				profileData: {
					...state.profileData,
					isFetching: false,
					error: action.value,
				},
			};

		default:
			return state;
	}
};

export default ProfileReducer;
