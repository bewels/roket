const jwt = require('jsonwebtoken');
const config = require('./../config/config');
module.exports = (req, res, next) => {
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
		const veriyToken = jwt.verify(token, config.auth.SECRET_KEY);

		req.user = veriyToken;
		next();
	} catch (e) {
		return res.status(403).json({ message: 'Пользователь не авторизован' });
	}
};
