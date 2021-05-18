const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/config');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('images'));

app.use('/api/', require('./routes/user'));

async function start() {
	try {
		await mongoose.connect(config.db.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		const PORT = process.env.PORT || config.server.PORT;
		app.listen(PORT, () => console.log('Server started'));
	} catch (e) {
		console.log(e);
	}
}

start();
