import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register, clearSucces } from './../../redux/actions/actions';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Register = ({ status, register, roles, clearSucces }) => {
	const [data, setData] = useState({
		email: '',
		password: '',
		name: '',
		surname: '',
		role: '',
	});
	const history = useHistory();
	const registeration = () => {
		if (data.email && data.password && data.name && data.role) {
			register(data);
		}
	};

	const regHandler = e => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	if (status.succes) {
		window.M.toast({ html: status.succes });
		setTimeout(() => {
			clearSucces();
		}, 500);
		history.push('/login');
	}

	return (
		<div className="register">
			<input
				value={data.email}
				onChange={regHandler}
				name="email"
				type="email"
				required
				placeholder="Email"
			/>
			<input
				value={data.password}
				onChange={regHandler}
				name="password"
				type="password"
				required
				minLength="6"
				placeholder="Password"
			/>
			<input
				value={data.name}
				onChange={regHandler}
				name="name"
				type="text"
				required
				placeholder="Name"
			/>
			<input
				value={data.surname}
				onChange={regHandler}
				name="surname"
				type="text"
				placeholder="Surname"
			/>
			<label htmlFor="roleSelect">Role</label>
			<select
				defaultValue={data.role}
				name="role"
				id="roleSelect"
				onChange={regHandler}
			>
				<option>-----</option>
				{roles.map(item => (
					<option key={item._id} value={item.role}>
						{item.role}
					</option>
				))}
			</select>
			<button className="btn" onClick={registeration}>
				{status.loading ? 'Подождите...' : 'Зарегестрироваться'}
			</button>
			<NavLink to="/auth/login">Войти</NavLink>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		status: state.status,
		roles: state.role.roles,
	};
};

const mapDispathToProps = {
	register,
	clearSucces,
};

export default connect(mapStateToProps, mapDispathToProps)(Register);
