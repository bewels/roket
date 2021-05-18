const jwt = require('jsonwebtoken');
const config = require('./../config/config');
module.exports = roles => {
	return (req, res, next) => {
		if (req.method === 'OPTIONS') {
			next();
		}

		try {
			const token = req.headers.authorization.split(' ')[1];
			if (!token) {
				return res
					.status(403)
					.json({ message: 'Пользователь не авторизован' });
			}
			const { role } = jwt.verify(token, config.auth.SECRET_KEY);
			let openGet = false;

			role.forEach(item => {
				if (roles.includes(item)) {
					openGet = true;
				}
			});

			if (!openGet) {
				return res.status(403).json({ message: 'Нет доступа' });
			}

			next();
		} catch (e) {
			return res
				.status(403)
				.json({ message: 'Пользователь не авторизован' });
		}
	};
};
