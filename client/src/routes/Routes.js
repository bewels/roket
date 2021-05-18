import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Main from '../components/main/Main';
const Routes = () => {
	const {
		user: { auth },
	} = useSelector(state => state);

	if (auth) {
		return (
			<Switch>
				<Route path="/" exact>
					<Main />
				</Route>
				<Redirect to="/" />
			</Switch>
		);
	}
	return (
		<Switch>
			<Route path="/auth/login" exact>
				<Login />
			</Route>
			<Route path="/auth/register" exact>
				<Register />
			</Route>
			<Redirect to="/auth/login" />
		</Switch>
	);
};

export default Routes;
