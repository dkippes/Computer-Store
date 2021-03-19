const mongoose = require('mongoose');
const db = mongoose.connection;
const uri = 'mongodb://localhost:27017/computerStore';

mongoose.connect(uri, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true
});

// Conexion abierta
db.once('open', _ => {
	console.log('Database is connected to', uri );
})
.catch( err => console.log(err));

// Error en la conexion
db.on('error', err => {
	console.log(err);
})