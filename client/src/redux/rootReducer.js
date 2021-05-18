import { combineReducers } from 'redux';
import { roleReducer } from './roleReducer';
import { statusReducer } from './statusReducer';
import { userReducer } from './userReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
	role: roleReducer,
	user: userReducer,
	users: usersReducer,
	status: statusReducer,
});
