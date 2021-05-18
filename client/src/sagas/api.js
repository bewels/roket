import axios from 'axios';

const instans = axios.create({
	baseURL: 'http://localhost:5000/api/',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('token')}`,
	},
});

export const roketApi = {
	async login(body) {
		return await instans
			.post('login', JSON.stringify(body))
			.then(res => res.data);
	},
	async register(body) {
		return await instans
			.post('register', JSON.stringify(body))
			.then(res => res.data);
	},
	async getUser() {
		return await instans.get('getUser').then(res => res.data);
	},
	async getUsers() {
		return await instans.get('getAllUser').then(res => res.data);
	},
	async getRole() {
		return await instans.get('getRole').then(res => res.data);
	},
};
