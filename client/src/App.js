import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { getRole, userSucces } from './redux/actions/actions';
import Routes from './routes/Routes';
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRole());
	}, [dispatch]);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			dispatch(userSucces());
		}
	}, [dispatch]);

	return (
		<Router>
			<Routes />
		</Router>
	);
}

export default App;
