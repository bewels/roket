export const roleSucces = data => {
	return {
		type: 'ROLE_SUCCES',
		payload: data,
	};
};
export const loading = () => {
	return {
		type: 'LOADING',
	};
};
export const succes = data => {
	return {
		type: 'SUCCES',
		payload: data,
	};
};
export const error = e => {
	return {
		type: 'ERROR',
		payload: e,
	};
};
export const clearError = () => {
	return {
		type: 'CLEAR_ERROR',
	};
};
export const clearSucces = () => {
	return {
		type: 'CLEAR_SUCCES',
	};
};
export const userSucces = () => {
	return {
		type: 'USER_SUCCES',
	};
};
export const logout = () => {
	return {
		type: 'LOGOUT',
	};
};
export const usersSucces = users => {
	return {
		type: 'USERS_SUCCES',
		payload: users,
	};
};
export const user = user => {
	return {
		type: 'USER',
		payload: user,
	};
};

// DUL

export const getRole = () => {
	return {
		type: 'GET_ROLE',
	};
};
export const getUser = () => {
	return {
		type: 'GET_USER',
	};
};
export const getUsers = () => {
	return {
		type: 'GET_USERS',
	};
};
export const login = data => {
	return {
		type: 'LOGIN',
		payload: data,
	};
};
export const register = data => {
	return {
		type: 'REGISTER',
		payload: data,
	};
};
