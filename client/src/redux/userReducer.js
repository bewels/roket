const initialState = {
	name: '',
	surname: '',
	email: '',
	imgURL: '',
	auth: false,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'USER_SUCCES':
			return {
				...state,
				auth: true,
			};
		case 'USER':
			const {
				user: { name, surname, email },
				imgURL,
			} = action.payload;
			return {
				...state,
				name,
				surname,
				email,
				imgURL,
			};
		case 'LOGOUT':
			return { ...state, auth: false };
		default:
			return state;
	}
};
