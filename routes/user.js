const { Router } = require('express');
const User = require('./../models/User');
const Role = require('./../models/Role');
const router = Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./../config/config');
const { check, validationResult } = require('express-validator');
const auth = require('./../middleware/auth.middleware');
const isAvailable = require('./../middleware/role.middleware');

router.get('/getUser', auth, async (req, res) => {
	try {
		const user = await User.findById({ _id: req.user.userId });
		const imgURL = req.user.role.includes('Admin')
			? 'admin.jpg'
			: 'user.jpg';
		res.status(200).json({ user, imgURL });
	} catch (e) {
		console.log(e);
		res.status(400).json({ message: 'Что-то пошло не так...' });
	}
});
router.get('/getAllUser', isAvailable(['Admin']), async (req, res) => {
	try {
		const users = await User.find();

		res.status(200).json({ users });
	} catch (e) {
		console.log(e);
		res.status(400).json({ message: 'Что-то пошло не так...' });
	}
});

router.get('/getRole', async (req, res) => {
	try {
		const roles = await Role.find();

		res.status(200).json({ roles });
	} catch (e) {
		console.log(e);
		res.status(400).json({ message: 'Что-то пошло не так...' });
	}
});

router.post(
	'/register',
	[
		check('email', 'Введен неккоректный email').isEmail(),
		check('name', 'Имя не может быть пустым').notEmpty(),
		check('password', 'Пароль не укладывается в диапозон').isLength({
			min: 6,
			max: 18,
		}),
	],
	async (req, res) => {
		const err = validationResult(req);

		if (!err.isEmpty()) {
			res.status(400).json({ err });
		}

		const { email, password, name, surname, role } = req.body;
		try {
			const candidate = await User.findOne({ email });

			if (candidate) {
				res.status(400).json({
					message: 'Пользователь уже существует...',
				});
			}

			const userRole = await Role.findOne({ role });

			if (!userRole) {
				res.status(404).json({ message: 'Роли не существует' });
			}

			const hash = await bcrypt.hash(password, 10);

			const newUser = new User({
				email,
				password: hash,
				name,
				surname,
				role: [userRole.role],
			});

			await newUser.save();

			res.status(201).json({
				message: 'Пользователь успешно зарегестрирован!',
			});
		} catch (e) {
			console.log(e);
			res.status(400).json({ message: 'Что-то пошло не так...' });
		}
	}
);

router.post(
	'/login',
	[
		check('email', 'Введен неккоректный email').isEmail(),
		check('password', 'Пароль не укладывается в диапозон').isLength({
			min: 6,
			max: 18,
		}),
	],
	async (req, res) => {
		const { email, password } = req.body;
		try {
			const user = await User.findOne({ email });

			if (!user) {
				return res
					.status(404)
					.json({ message: 'Неверный логин или пароль' });
			}

			const validPassword = await bcrypt.compare(password, user.password);

			if (!validPassword) {
				return res
					.status(404)
					.json({ message: 'Неверный логин или пароль' });
			}

			const token = jwt.sign(
				{ userId: user._id, role: user.role },
				config.auth.SECRET_KEY,
				{ expiresIn: '1h' }
			);

			res.status(200).json({ token, message: 'Вы вошли!' });
		} catch (e) {
			console.log(e);
			res.status(400).json({ message: 'Что-то пошло не так...' });
		}
	}
);

module.exports = router;
