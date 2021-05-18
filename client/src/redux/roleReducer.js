const initialState = {
	roles: [],
};

export const roleReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ROLE_SUCCES':
			return {
				roles: [...action.payload.roles],
			};
		default:
			return state;
	}
};
