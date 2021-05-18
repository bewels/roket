import React, { useEffect } from 'react';
import { getUser, getUsers, logout } from '../../redux/actions/actions';
import User from './User';
import { connect } from 'react-redux';

const Main = ({ user, users, getUser, getUsers, logout }) => {
	useEffect(() => {
		getUser();
		getUsers();
	}, [getUser, getUsers]);
	return (
		<div className="main">
			<h2>Текущий User</h2>
			<p>{user.name}</p>
			<p>{user.email}</p>
			<p>{user.surname}</p>
			<img src={`http://localhost:5000/${user.imgURL}`} alt="ava" />
			<button onClick={() => logout()}>Выйти</button>
			<div className="allUsers">
				<h2>Все Userы</h2>
				{users.length
					? users.map(item => <User key={item._id} item={item} />)
					: 'У вас не доступа!'}
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		user: state.user,
		users: state.users.users,
	};
};

const mapDispathToProps = {
	getUser,
	getUsers,
	logout,
};

export default connect(mapStateToProps, mapDispathToProps)(Main);
