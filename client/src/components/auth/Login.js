import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from './../../redux/actions/actions';
import { NavLink } from 'react-router-dom';
const Login = ({ login, status }) => {
	const [data, setData] = useState({ email: '', password: '' });

	const loginHandler = e => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const logIn = () => {
		if (data.email && data.password) {
			login(data);
		}
	};

	return (
		<div className="login input-field">
			<input
				onChange={loginHandler}
				name="email"
				type="email"
				required
				placeholder="Email"
			/>
			<input
				onChange={loginHandler}
				name="password"
				type="password"
				required
				minLength="6"
				placeholder="Password"
			/>
			<button className="btn" onClick={logIn}>
				{status.loading ? 'Подождите...' : 'Войти'}
			</button>
			<NavLink to="/auth/register">Зарегестрироваться</NavLink>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		status: state.status,
	};
};

const mapDispathToProps = {
	login,
};

export default connect(mapStateToProps, mapDispathToProps)(Login);
