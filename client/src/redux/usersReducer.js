const initialState = {
	users: [],
};

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'USERS_SUCCES':
			return {
				users: [...action.payload.users],
			};
		default:
			return state;
	}
};
