const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = Schema({
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true,
		validate: {
			validator: function (value) {
				return value > 18;
			},
			message: 'El usuario debe ser mayor de 18 años'
		}
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true, // Convierte el correo electrónico a minúsculas antes de guardarlo en la base de datos
		validate: {
			validator: function (value) {
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
			},
			message: 'Por favor, introduce un correo electrónico válido'
		}
	},
	password: {
		type: String,
		required: true,
		validate: {
			validator: function (value) {
				return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
			},
			message: 'La contraseña debe contener al menos una mayúscula y un número, y tener al menos 8 caracteres'
		}
	}
})

module.exports = mongoose.model('User', userSchema)
