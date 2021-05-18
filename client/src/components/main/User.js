import React from 'react';

const User = ({ item }) => {
	return (
		<div>
			<hr />
			<p>{item.name}</p>
			<p>{item.email}</p>
			<p>{item.surname}</p>
			<p>{item._id}</p>
			<p>{item.role}</p>
			<hr />
		</div>
	);
};

export default User;
