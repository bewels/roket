const initialState = {
	loading: false,
	err: null,
	succes: null,
};

export const statusReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOADING':
			return {
				...state,
				loading: true,
			};
		case 'SUCCES':
			return {
				...state,
				loading: false,
				succes: action.payload,
			};
		case 'ERROR':
			return {
				...state,
				loading: false,
				err: action.payload,
			};
		case 'CLEAR_ERROR':
			return {
				...state,
				err: null,
			};
		case 'CLEAR_SUCCES':
			return {
				...state,
				succes: null,
			};
		default:
			return state;
	}
};
